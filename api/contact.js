import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, email, projectType, budget, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message.'
      });
    }

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const port = parseInt(process.env.SMTP_PORT || '587', 10);
    const toEmail = process.env.EMAIL_TO || 'sarabu.balaji9985@gmail.com';
    const fromEmail = process.env.EMAIL_FROM || user || 'contact@balajiprojects.in';

    if (host && user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: process.env.SMTP_SECURE === 'true' || port === 465,
        auth: { user, pass }
      });

      await transporter.sendMail({
        from: fromEmail,
        to: toEmail,
        replyTo: email,
        subject: `[Portfolio Inquiry] ${projectType || 'General'} - from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nBudget: ${budget}\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #1c1c1c; max-width: 600px;">
            <h2 style="color: #0A1931; margin-bottom: 8px;">New Project Inquiry</h2>
            <p>You received a new inquiry through your portfolio website.</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr><td style="padding: 8px; border-bottom: 1px solid #eaeaea; font-weight: bold; width: 140px;">Name:</td><td style="padding: 8px; border-bottom: 1px solid #eaeaea;">${name}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eaeaea; font-weight: bold;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #eaeaea;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eaeaea; font-weight: bold;">Project Type:</td><td style="padding: 8px; border-bottom: 1px solid #eaeaea;">${projectType || 'Not specified'}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eaeaea; font-weight: bold;">Budget:</td><td style="padding: 8px; border-bottom: 1px solid #eaeaea;">${budget || 'Not specified'}</td></tr>
            </table>
            <h3 style="margin-top: 24px; color: #0A1931;">Message:</h3>
            <div style="background: #F6FAFD; padding: 16px; border-radius: 8px; border: 1px solid #B3CFE5; white-space: pre-wrap; font-size: 15px;">${message}</div>
          </div>
        `
      });
    }

    return res.status(200).json({
      success: true,
      message: `Thank you for reaching out, ${name}! Your message has been received. I will review your requirements and respond within 24 hours.`
    });
  } catch (error) {
    console.error('API Contact Submission Error:', error);
    return res.status(500).json({
      success: false,
      message: 'An unexpected error occurred while transmitting your message. Please reach out directly to sarabu.balaji9985@gmail.com or WhatsApp +91 9030545655.'
    });
  }
}

