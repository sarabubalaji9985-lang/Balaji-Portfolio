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
        message: 'Please provide your name, email, and project message.'
      });
    }

    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const user = process.env.SMTP_USER || 'sarabu.balaji9985@gmail.com';
    const pass = (process.env.SMTP_PASS || 'oiarkegxdtmgyabu').replace(/\s+/g, '');
    const port = parseInt(process.env.SMTP_PORT || '465', 10);
    const toEmail = process.env.EMAIL_TO || 'sarabu.balaji9985@gmail.com';

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465 || process.env.SMTP_SECURE === 'true',
      auth: { user, pass }
    });

    const info = await transporter.sendMail({
      from: `"Balaji Projects .P Contact" <${user}>`,
      to: toEmail,
      replyTo: email,
      subject: `🚨 [New Client Inquiry] ${projectType || 'Web Development'} — from ${name}`,
      text: `New Inquiry Received:\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType || 'Not specified'}\nBudget: ${budget || 'Not specified'}\n\nMessage:\n${message}\n\nReceived at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background-color: #0A1931; border-radius: 16px; overflow: hidden; border: 1px solid #1A3D63; color: #F6FAFD;">
          <div style="background: linear-gradient(135deg, #1A3D63, #4A7FA7); padding: 24px 28px;">
            <p style="margin: 0; font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #B3CFE5;">New Lead Received</p>
            <h2 style="margin: 6px 0 0 0; font-size: 22px; color: #FFFFFF; font-weight: 700;">Portfolio Client Inquiry</h2>
          </div>
          
          <div style="padding: 28px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(179,207,229,0.15); color: #809FB9; font-size: 13px; font-family: monospace; width: 130px;">PROSPECT:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(179,207,229,0.15); color: #F6FAFD; font-size: 15px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(179,207,229,0.15); color: #809FB9; font-size: 13px; font-family: monospace;">EMAIL:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(179,207,229,0.15); color: #B3CFE5; font-size: 15px; font-weight: 500;">
                  <a href="mailto:${email}" style="color: #B3CFE5; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(179,207,229,0.15); color: #809FB9; font-size: 13px; font-family: monospace;">PROJECT TYPE:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(179,207,229,0.15); color: #F6FAFD; font-size: 14px;">${projectType || 'Custom Web Application'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(179,207,229,0.15); color: #809FB9; font-size: 13px; font-family: monospace;">BUDGET TIER:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(179,207,229,0.15); color: #B3CFE5; font-size: 14px; font-weight: 600;">${budget || 'Not specified'}</td>
              </tr>
            </table>

            <div style="margin-top: 20px;">
              <p style="margin: 0 0 8px 0; font-family: monospace; font-size: 12px; color: #809FB9; text-transform: uppercase;">Message Brief:</p>
              <div style="background-color: #10243E; border: 1px solid #1A3D63; border-radius: 12px; padding: 18px; color: #F6FAFD; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>

            <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid rgba(179,207,229,0.15); font-size: 11px; font-family: monospace; color: #63809C;">
              <span>Source: https://balajiprojectsp.in/contact</span>
            </div>
          </div>
        </div>
      `
    });

    console.log('Contact email dispatched successfully. ID:', info.messageId);

    return res.status(200).json({
      success: true,
      message: `Thank you, ${name}! Your inquiry has been sent directly to Balaji Sarabu. I will review your requirements and respond within 24 hours.`
    });
  } catch (error) {
    console.error('API Contact Submission Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to transmit message. Please reach out directly to sarabu.balaji9985@gmail.com or WhatsApp +91 9030545655.'
    });
  }
}
