import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import rateLimit from "express-rate-limit";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Rate limiting to prevent abuse
const contactLimit = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 contact requests per window
    message: { error: "Too many requests from this IP, please try again after 15 minutes" },
    standardHeaders: true,
    legacyHeaders: false,
});

app.use(cors());
app.use(express.json());

// Serve static files from the React app dist folder
app.use(express.static(path.join(__dirname, "../dist")));

const smtpPort = parseInt(process.env.SMTP_PORT || "465");

console.log("SMTP config — user:", process.env.SMTP_USER, "| port:", smtpPort, "| pass loaded:", !!process.env.SMTP_PASS);

const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: smtpPort,
    secure: smtpPort === 465,
    requireTLS: smtpPort === 587,
    auth: {
        type: "login",
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false,
        minVersion: "TLSv1.2",
    },
});

app.post("/api/contact", contactLimit,
    async (req, res) => {
    const { first, last, email, subject, message } = req.body;

    if (!first || !last || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

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

        res.status(200).json({ success: true });
    } catch (err) {
        console.error("Mail error:", err);
        res.status(500).json({ error: err.message || "Failed to send email. Please try again." });
    }
});

// The catch-all handler: for any request that doesn't match one above, send back React's index.html file.
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const PORT = process.env.PORT || process.env.SERVER_PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    transporter.verify((err) => {
        if (err) console.error("SMTP connection failed:", err.message);
        else console.log("SMTP connection OK — ready to send mail");
    });
});
