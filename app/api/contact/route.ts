import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, phone, interest, message } = body;

        // Basic Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required fields.' },
                { status: 400 }
            );
        }

        const targetEmail = process.env.NOTIFICATION_EMAIL || 'info@siddhiss.com';

        // Check for SMTP Credentials
        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = parseInt(process.env.SMTP_PORT || '587');
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;

        const emailContentHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; rounded: 10px; background-color: #ffffff;">
                <div style="background-color: #0f0f0f; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
                    <h2 style="color: #ffffff; margin: 0; font-size: 22px;">New Quote & Inquiry Request</h2>
                    <p style="color: #ff8c61; margin: 5px 0 0 0; font-size: 14px; font-weight: bold;">Siddhi Industrial Solutions</p>
                </div>
                <div style="padding: 25px; color: #333333; line-height: 1.6;">
                    <p style="font-size: 16px; font-weight: bold; margin-bottom: 20px;">You have received a new inquiry from the website contact form:</p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr style="border-bottom: 1px solid #eeeeee;">
                            <td style="padding: 10px 0; font-weight: bold; width: 35%; color: #555555;">Full Name:</td>
                            <td style="padding: 10px 0; color: #111111;">${name}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eeeeee;">
                            <td style="padding: 10px 0; font-weight: bold; color: #555555;">Email Address:</td>
                            <td style="padding: 10px 0; color: #111111;"><a href="mailto:${email}" style="color: #ff8c61; font-weight: bold;">${email}</a></td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eeeeee;">
                            <td style="padding: 10px 0; font-weight: bold; color: #555555;">Phone Number:</td>
                            <td style="padding: 10px 0; color: #111111;">${phone || 'Not provided'}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eeeeee;">
                            <td style="padding: 10px 0; font-weight: bold; color: #555555;">Company:</td>
                            <td style="padding: 10px 0; color: #111111;">${company || 'Not provided'}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eeeeee;">
                            <td style="padding: 10px 0; font-weight: bold; color: #555555;">Area of Interest:</td>
                            <td style="padding: 10px 0; color: #111111; font-weight: bold; color: #0070f3;">${interest || 'General Inquiry'}</td>
                        </tr>
                    </table>

                    <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #ff8c61; border-radius: 4px; margin-top: 20px;">
                        <p style="margin: 0; font-weight: bold; color: #555555; font-size: 13px;">Message / Requirement Details:</p>
                        <p style="margin: 10px 0 0 0; color: #222222; font-size: 14px; white-space: pre-wrap;">${message}</p>
                    </div>
                </div>
                <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #777777; border-radius: 0 0 8px 8px;">
                    This is an automated notification from <a href="https://siddhiss.com" style="color: #333333; text-decoration: underline;">siddhiss.com</a>
                </div>
            </div>
        `;

        if (smtpHost && smtpUser && smtpPass) {
            // Transporter setup
            const transporter = nodemailer.createTransport({
                host: smtpHost,
                port: smtpPort,
                secure: smtpPort === 465,
                auth: {
                    user: smtpUser,
                    pass: smtpPass,
                },
            });

            await transporter.sendMail({
                from: `"Siddhi Industrial Website" <${smtpUser}>`,
                to: targetEmail,
                replyTo: email,
                subject: `New Lead: ${name} (${interest})`,
                html: emailContentHtml,
            });

            return NextResponse.json({ success: true, message: 'Notification email sent successfully via SMTP.' });
        }

        // Web3Forms or Resend fallback if WEB3FORMS_ACCESS_KEY is set
        const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
        if (web3formsKey) {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: web3formsKey,
                    name,
                    email,
                    phone,
                    company,
                    interest,
                    message,
                    subject: `New Inquiry from ${name} - Siddhi Industrial`,
                    to: targetEmail
                })
            });
            const data = await res.json();
            if (data.success) {
                return NextResponse.json({ success: true, message: 'Inquiry forwarded via Web3Forms service.' });
            }
        }

        // Default response if no SMTP is configured yet
        console.log(`[CONTACT FORM SUBMISSION] Received inquiry for ${targetEmail}:`, {
            name, email, company, phone, interest, message
        });

        return NextResponse.json({
            success: true,
            message: 'Inquiry received successfully.',
            details: {
                targetEmail,
                smtpConfigured: false,
                note: 'Configure SMTP_HOST, SMTP_USER, SMTP_PASS in Vercel/Railway env to receive instant automated emails.'
            }
        });

    } catch (error: any) {
        console.error('Contact Form Submission Error:', error);
        return NextResponse.json(
            { error: 'An unexpected error occurred while processing your request.' },
            { status: 500 }
        );
    }
}
