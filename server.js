import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET'],
}));

app.use(express.json());

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
});


transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP connection failed:", error);
  } else {
    console.log("✅ SMTP server ready to send emails");
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  console.log("📩 Incoming contact request:", req.body);

  try {
    const { name, email, churchName, role, needs } = req.body;

    // Validate required fields
    if (!name || !email || !churchName || !role || !needs) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email to you (admin)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Church/Organization:</strong> ${churchName}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Needs/Message:</strong></p>
        <p>${needs.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Auto-reply email to the person who submitted
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We Received Your Message - Biblios Technologies',
      html: `
        <h2>Thank You for Reaching Out!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and we're excited to learn more about your ministry's needs.</p>
        <p>Our team will review your submission and get back to you within 24-48 hours.</p>
        <p>If you have any urgent questions, feel free to reach out directly.</p>
        <br>
        <p>Blessings,<br>The Biblios Technologies Team</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      error: 'Failed to send message. Please try again later.',
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
