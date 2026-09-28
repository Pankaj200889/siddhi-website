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

        // 1. Resend API Service (Recommended for Next.js / Vercel with zero Microsoft restrictions)
        const resendKey = (process.env.RESEND_API_KEY || '').trim();
        if (resendKey) {
            try {
                const res = await fetch('https://api.resend.com/emails', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${resendKey}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        from: 'Siddhi Website Inquiry <onboarding@resend.dev>',
                        to: [targetEmail],
                        reply_to: email,
                        subject: `New Lead: ${name} (${interest || 'General Inquiry'})`,
                        html: emailContentHtml
                    })
                });

                const data = await res.json();
                if (res.ok && data.id) {
                    return NextResponse.json({ success: true, message: 'Notification email sent successfully via Resend.' });
                } else {
                    console.error('[RESEND API ERROR]:', data);
                    return NextResponse.json(
                        { error: `Resend Dispatch Failed: ${data?.message || 'Invalid API Key'}` },
                        { status: 400 }
                    );
                }
            } catch (resendErr: any) {
                console.error('[RESEND ERROR]:', resendErr);
            }
        }

        // Check for SMTP Credentials
        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = parseInt(process.env.SMTP_PORT || '587');
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;

        if (smtpHost && smtpUser && smtpPass && smtpPass !== 'your_email_or_app_password_here' && smtpPass !== 'your_email_password_here') {
            try {
                // Microsoft 365 / Outlook & Standard SMTP Transporter Setup
                const transporter = nodemailer.createTransport({
                    host: smtpHost,
                    port: smtpPort,
                    secure: smtpPort === 465, // true for 465, false for 587 (TLS/STARTTLS)
                    auth: {
                        user: smtpUser,
                        pass: smtpPass,
                    },
                    tls: {
                        ciphers: 'SSLv3',
                        rejectUnauthorized: false
                    }
                });

                await transporter.sendMail({
                    from: `"Siddhi Industrial Website" <${smtpUser}>`,
                    to: targetEmail,
                    replyTo: email,
                    subject: `New Lead: ${name} (${interest})`,
                    html: emailContentHtml,
                });

                return NextResponse.json({ success: true, message: 'Notification email sent successfully via Outlook SMTP.' });
            } catch (smtpErr: any) {
                console.error('[SMTP ERROR]:', smtpErr);
                return NextResponse.json(
                    { error: `SMTP Dispatch Error: ${smtpErr?.message || 'Authentication failed or port 587 blocked. Check Outlook password / App Password.'}` },
                    { status: 500 }
                );
            }
        }

        // Web3Forms service
        const web3formsKey = (process.env.WEB3FORMS_ACCESS_KEY || '').trim();
        if (web3formsKey && web3formsKey !== 'your_web3forms_access_key_here') {
            try {
                const payload = {
                    access_key: web3formsKey,
                    from_name: 'Siddhi Industrial Website',
                    subject: `New Lead: ${name} (${interest || 'General Inquiry'})`,
                    name,
                    email,
                    phone: phone || 'Not provided',
                    company: company || 'Not provided',
                    interest: interest || 'General Inquiry',
                    message: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nCompany: ${company || 'Not provided'}\nInterest: ${interest || 'General Inquiry'}\n\nMessage / Requirement:\n${message}`
                };

                const res = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                    },
                    body: JSON.stringify(payload)
                });

                const rawText = await res.text();
                let data: any = null;
                try { data = JSON.parse(rawText); } catch (e) {}

                if (data && data.success) {
                    return NextResponse.json({ success: true, message: 'Inquiry sent successfully to info@siddhiss.com.' });
                }

                // URLSearchParams Fallback
                const formData = new URLSearchParams();
                Object.entries(payload).forEach(([key, val]) => formData.append(key, String(val)));

                const resFallback = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json',
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                    },
                    body: formData.toString()
                });

                const rawFallbackText = await resFallback.text();
                let fallbackData: any = null;
                try { fallbackData = JSON.parse(rawFallbackText); } catch (e) {}

                if (fallbackData && fallbackData.success) {
                    return NextResponse.json({ success: true, message: 'Inquiry sent successfully to info@siddhiss.com.' });
                }
            } catch (web3Err: any) {
                console.error('[WEB3FORMS ERROR]:', web3Err);
            }
        }

        // Catch-all response: If neither SMTP nor Web3Forms processed the email
        console.log(`[CONTACT FORM SUBMISSION RECEIVED] for ${targetEmail}:`, {
            name, email, company, phone, interest, message
        });

        const debugInfo = {
            hasSmtpHost: Boolean(smtpHost),
            hasSmtpUser: Boolean(smtpUser),
            hasSmtpPass: Boolean(smtpPass),
            hasWeb3Key: Boolean(web3formsKey)
        };

        return NextResponse.json({
            success: true,
            message: `Thank you! Your quote request from ${name} has been received. Our team will get back to you shortly at ${email}.`,
            envCheck: debugInfo
        });

    } catch (error: any) {
        console.error('Contact Form Submission Error:', error);
        return NextResponse.json(
            { error: `Submission error: ${error?.message || 'An unexpected server error occurred.'}` },
            { status: 500 }
        );
    }
}
