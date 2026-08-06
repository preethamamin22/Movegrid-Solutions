import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5005; // Using 5005 to avoid conflicts

app.use(cors());
app.use(express.json());

// Nodemailer setup using Ethereal (for testing) or real SMTP
const getTransporter = async () => {
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  } else {
    // Generate test SMTP service account from ethereal.email
    const testAccount = await nodemailer.createTestAccount();
    console.log('Created Ethereal Test Account:', testAccount.user);
    return nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }
};

app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, service, message } = req.body;

    if (!firstName || !email || !message) {
      return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    const transporter = await getTransporter();

    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: 'info@outvoxsolution.com',
      subject: `New Lead: ${service || 'General Inquiry'} from ${firstName}`,
      text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Service: ${service}
      
      Message:
      ${message}
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact Form Error:', error);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

app.listen(PORT, () => {
  console.log(`Outvox Website Backend running on http://localhost:${PORT}`);
});
