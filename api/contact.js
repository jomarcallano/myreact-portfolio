import nodemailer from "nodemailer";

export default async function handler(req, res) {
    // CORS headers
    const allowedOrigin = process.env.ALLOWED_ORIGIN || '*';
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { first, last, email, subject, message } = req.body;

    // Basic validation
    if (!first || !last || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

    const smtpPort = parseInt(process.env.SMTP_PORT || "587");

    const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: smtpPort,
        secure: smtpPort === 465,
        requireTLS: smtpPort === 587,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        tls: {
            rejectUnauthorized: false,
            minVersion: "TLSv1.2",
        },
    });

    try {
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER,
            replyTo: email,
            subject: `[Portfolio] ${subject}`,
            text: `From: ${first} ${last} <${email}>\n\n${message}`,
            html: `
                <p><strong>From:</strong> ${first} ${last} &lt;${email}&gt;</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <hr />
                <p>${message.replace(/\n/g, "<br/>")}</p>
            `,
        });

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error("Mail error:", err);
        return res.status(500).json({
            error: err.message || "Failed to send email. Please try again."
        });
    }
}