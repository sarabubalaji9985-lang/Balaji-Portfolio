import nodemailer from 'nodemailer';
import { config } from '../config/env.js';

let transporter = null;

if (config.smtp.host && config.smtp.user && config.smtp.pass) {
  transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.secure,
    auth: {
      user: config.smtp.user,
      pass: config.smtp.pass,
    },
  });
}

export const sendContactEmail = async ({ name, email, projectType, budget, message }) => {
  const emailContent = `
New Project Inquiry Received from Portfolio:
---------------------------------------------
From: ${name} (${email})
Project Type: ${projectType}
Budget Range: ${budget}
Date: ${new Date().toISOString()}

Project Details:
${message}
---------------------------------------------
  `;

  if (transporter) {
    return transporter.sendMail({
      from: config.smtp.fromEmail,
      to: config.smtp.toEmail,
      replyTo: email,
      subject: `[Portfolio Inquiry] ${projectType} - from ${name}`,
      text: emailContent,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #1c1c1c; max-width: 600px;">
          <h2 style="color: #8C5A3C; margin-bottom: 8px;">New Project Inquiry</h2>
          <p>You received a new inquiry through your portfolio website.</p>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #eaeaea; font-weight: bold; width: 140px;">Name:</td><td style="padding: 8px; border-bottom: 1px solid #eaeaea;">${name}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eaeaea; font-weight: bold;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #eaeaea;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eaeaea; font-weight: bold;">Project Type:</td><td style="padding: 8px; border-bottom: 1px solid #eaeaea;">${projectType}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eaeaea; font-weight: bold;">Budget:</td><td style="padding: 8px; border-bottom: 1px solid #eaeaea;">${budget}</td></tr>
          </table>
          <h3 style="margin-top: 24px; color: #333;">Message:</h3>
          <div style="background: #f7f6f0; padding: 16px; border-radius: 6px; white-space: pre-wrap; font-size: 15px;">${message}</div>
        </div>
      `,
    });
  }

  // Development simulation mode when SMTP credentials are not yet set
  console.log('----------------------------------------------------');
  console.log('📨 [DEV SIMULATION] Contact inquiry received:');
  console.log(`From: ${name} <${email}>`);
  console.log(`Type: ${projectType} | Budget: ${budget}`);
  console.log(`Message: ${message}`);
  console.log('ℹ️  Configure SMTP_HOST, SMTP_USER, SMTP_PASS in .env to dispatch real emails.');
  console.log('----------------------------------------------------');

  return { messageId: `dev-sim-${Date.now()}` };
};
