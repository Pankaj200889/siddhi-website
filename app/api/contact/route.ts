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

        const formattedDate = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Kolkata',
            dateStyle: 'full',
            timeStyle: 'short'
        });

        const emailContentHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Lead Inquiry - Siddhi Industrial Solutions</title>
            </head>
            <body style="margin: 0; padding: 0; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                <div style="max-width: 640px; margin: 30px auto; background-color: #111827; border-radius: 16px; border: 1px solid #1f2937; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.04);">
                    
                    <!-- Header Banner -->
                    <div style="background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%); padding: 32px 30px; text-align: left; border-bottom: 1px solid #1e293b;">
                        <div style="display: inline-block; background-color: rgba(255, 140, 97, 0.15); border: 1px solid rgba(255, 140, 97, 0.3); color: #ff8c61; padding: 4px 12px; border-radius: 9999px; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px;">
                            ⚡ New Inquiry Received
                        </div>
                        <h1 style="color: #ffffff; margin: 0 0 6px 0; font-size: 24px; font-weight: 800;">
                            Siddhi Industrial Solutions
                        </h1>
                        <p style="color: #94a3b8; margin: 0; font-size: 13px;">
                            ${formattedDate} (IST)
                        </p>
                    </div>

                    <!-- Main Content Card -->
                    <div style="padding: 32px 30px; color: #e2e8f0;">
                        
                        <!-- Client Highlight Card -->
                        <div style="background-color: #1e293b; border-radius: 12px; border: 1px solid #334155; padding: 20px; margin-bottom: 24px;">
                            <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #38bdf8; margin-bottom: 14px;">
                                Client Contact Overview
                            </div>
                            
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; font-weight: 600; width: 35%;">Client Name:</td>
                                    <td style="padding: 8px 0; color: #ffffff; font-size: 15px; font-weight: 700;">${name}</td>
                                </tr>
                                <tr style="border-top: 1px solid rgba(255, 255, 255, 0.05);">
                                    <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; font-weight: 600;">Email Address:</td>
                                    <td style="padding: 8px 0; color: #38bdf8; font-size: 14px; font-weight: 600;"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></td>
                                </tr>
                                <tr style="border-top: 1px solid rgba(255, 255, 255, 0.05);">
                                    <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; font-weight: 600;">Phone Number:</td>
                                    <td style="padding: 8px 0; color: #ffffff; font-size: 14px; font-weight: 600;">${phone || 'Not provided'}</td>
                                </tr>
                                <tr style="border-top: 1px solid rgba(255, 255, 255, 0.05);">
                                    <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; font-weight: 600;">Company / Org:</td>
                                    <td style="padding: 8px 0; color: #ffffff; font-size: 14px; font-weight: 600;">${company || 'Not provided'}</td>
                                </tr>
                                <tr style="border-top: 1px solid rgba(255, 255, 255, 0.05);">
                                    <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; font-weight: 600;">Solution Required:</td>
                                    <td style="padding: 8px 0;">
                                        <span style="display: inline-block; background-color: rgba(255, 140, 97, 0.2); color: #ff8c61; border: 1px solid rgba(255, 140, 97, 0.4); padding: 2px 10px; border-radius: 6px; font-size: 12px; font-weight: 700;">
                                            ${interest || 'General Inquiry'}
                                        </span>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <!-- Requirement / Message Box -->
                        <div style="background-color: #0f172a; border-left: 4px solid #ff8c61; border-radius: 0 12px 12px 0; padding: 20px; margin-bottom: 28px;">
                            <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #ff8c61; margin-bottom: 8px;">
                                Project Requirement Details:
                            </div>
                            <div style="color: #f1f5f9; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
                                ${message}
                            </div>
                        </div>

                        <!-- Call-to-Action Buttons -->
                        <div style="text-align: center; margin-top: 24px; margin-bottom: 12px;">
                            <a href="mailto:${email}?subject=Re:%20Siddhi%20Industrial%20Solutions%20Inquiry%20-%20${encodeURIComponent(interest || 'General')}" style="display: inline-block; background: linear-gradient(135deg, #ff8c61 0%, #f97316 100%); color: #000000; font-weight: 800; font-size: 14px; padding: 14px 28px; border-radius: 10px; text-decoration: none; margin-right: 10px;">
                                ✉️ Reply to ${name.split(' ')[0]}
                            </a>
                            ${phone ? `
                            <a href="tel:${phone}" style="display: inline-block; background-color: #1e293b; border: 1px solid #334155; color: #ffffff; font-weight: 700; font-size: 14px; padding: 14px 24px; border-radius: 10px; text-decoration: none;">
                                📞 Call Client
                            </a>
                            ` : ''}
                        </div>

                    </div>

                    <!-- Footer -->
                    <div style="background-color: #090d16; padding: 20px 30px; text-align: center; border-top: 1px solid #1e293b; font-size: 12px; color: #64748b;">
                        <p style="margin: 0 0 6px 0;">
                            Sent automatically from <a href="https://siddhiss.com" style="color: #94a3b8; text-decoration: underline;">siddhiss.com</a> contact gateway.
                        </p>
                        <p style="margin: 0; font-size: 11px; color: #475569;">
                            Siddhi Industrial Solutions • Noida, UP, India
                        </p>
                    </div>

                </div>
            </body>
            </html>
        `;

        const clientConfirmationHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Inquiry Received - Siddhi Industrial Solutions</title>
            </head>
            <body style="margin: 0; padding: 0; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                <div style="max-width: 600px; margin: 30px auto; background-color: #111827; border-radius: 16px; border: 1px solid #1f2937; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);">
                    <div style="background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%); padding: 32px 30px; border-bottom: 1px solid #1e293b;">
                        <h1 style="color: #ffffff; margin: 0 0 6px 0; font-size: 22px; font-weight: 800;">
                            Siddhi Industrial Solutions
                        </h1>
                        <p style="color: #38bdf8; margin: 0; font-size: 13px; font-weight: 600;">
                            Industrial EHS, Fire Safety & Compliance Engineering
                        </p>
                    </div>

                    <div style="padding: 32px 30px; color: #e2e8f0; line-height: 1.6;">
                        <h2 style="color: #ffffff; margin: 0 0 16px 0; font-size: 18px; font-weight: 700;">
                            Thank you for reaching out, ${name}!
                        </h2>
                        
                        <p style="color: #cbd5e1; font-size: 14px; margin: 0 0 20px 0;">
                            We have received your inquiry regarding <strong style="color: #ff8c61;">${interest || 'General Inquiry'}</strong>. Our technical specialists and EHS safety engineers are reviewing your requirement and will get back to you shortly.
                        </p>

                        <div style="background-color: #1e293b; border-radius: 12px; border: 1px solid #334155; padding: 18px; margin-bottom: 24px;">
                            <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; margin-bottom: 10px;">
                                Your Request Summary:
                            </div>
                            <p style="margin: 4px 0; font-size: 13px; color: #e2e8f0;"><strong>Area of Interest:</strong> ${interest || 'General Inquiry'}</p>
                            <p style="margin: 4px 0; font-size: 13px; color: #e2e8f0;"><strong>Company:</strong> ${company || 'Not provided'}</p>
                            <p style="margin: 4px 0; font-size: 13px; color: #e2e8f0;"><strong>Message:</strong> ${message}</p>
                        </div>

                        <div style="background-color: #0f172a; border-radius: 12px; padding: 18px; border: 1px solid #1e293b; margin-bottom: 24px;">
                            <div style="font-size: 12px; font-weight: 700; color: #ffffff; margin-bottom: 8px;">Direct Contact Info:</div>
                            <p style="margin: 2px 0; font-size: 13px; color: #94a3b8;">📍 <strong>Office Address:</strong> 601, Shopping Complex, Eldeco Live by the Greens, Sector-150, Noida, UP, India - 201312</p>
                            <p style="margin: 2px 0; font-size: 13px; color: #94a3b8;">📧 <strong>Email:</strong> info@siddhiss.com</p>
                            <p style="margin: 2px 0; font-size: 13px; color: #94a3b8;">📞 <strong>Phone:</strong> +91 788 118 0567</p>
                        </div>

                        <div style="text-align: center;">
                            <a href="https://siddhiss.com" style="display: inline-block; background-color: #ff8c61; color: #000000; font-weight: 800; font-size: 13px; padding: 12px 24px; border-radius: 8px; text-decoration: none;">
                                Visit siddhiss.com
                            </a>
                        </div>
                    </div>

                    <div style="background-color: #090d16; padding: 16px 30px; text-align: center; border-top: 1px solid #1e293b; font-size: 11px; color: #64748b;">
                        © ${new Date().getFullYear()} Siddhi Industrial Solutions. All rights reserved.
                    </div>
                </div>
            </body>
            </html>
        `;

        // 1. Resend API Service
        const resendKey = (process.env.RESEND_API_KEY || '').trim();
        if (resendKey) {
            try {
                // Send Admin Notification to info@siddhiss.com
                const resAdmin = await fetch('https://api.resend.com/emails', {
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

                const dataAdmin = await resAdmin.json();

                // Send Auto-Reply Confirmation to Customer Requestor (email)
                try {
                    await fetch('https://api.resend.com/emails', {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${resendKey}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            from: 'Siddhi Industrial Solutions <onboarding@resend.dev>',
                            to: [email],
                            subject: `Inquiry Received - Siddhi Industrial Solutions`,
                            html: clientConfirmationHtml
                        })
                    });
                } catch (clientErr) {
                    console.warn('[RESEND CLIENT AUTO-REPLY WARNING]:', clientErr);
                }

                if (resAdmin.ok && dataAdmin.id) {
                    return NextResponse.json({ success: true, message: 'Notification email sent successfully via Resend.' });
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
