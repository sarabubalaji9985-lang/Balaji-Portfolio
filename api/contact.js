import nodemailer from 'nodemailer';

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

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
    const {
      name,
      email,
      phoneOrWhatsapp,
      projectType,
      timeline,
      formMode,
      message,
      website_trap,
    } = req.body || {};

    // Silent drop for automated honeypot bot submissions
    if (website_trap) {
      return res.status(200).json({
        success: true,
        message: 'Inquiry received successfully.'
      });
    }

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide your name, email, and requirements description.'
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

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safePhone = escapeHtml(phoneOrWhatsapp ? phoneOrWhatsapp.trim() : '');
    const safeProjectType = escapeHtml(projectType ? projectType.trim() : 'Custom Web App');
    const safeTimeline = escapeHtml(timeline ? timeline.trim() : 'Flexible');
    const safeMode = escapeHtml(formMode ? formMode.trim() : 'Detailed Scope');
    const safeMessage = escapeHtml(message.trim());

    // Clean phone number for direct WhatsApp deep-link
    const rawDigits = (phoneOrWhatsapp || '').replace(/[^0-9]/g, '');
    let waLink = null;
    if (rawDigits.length >= 10) {
      const formattedDigits = rawDigits.length === 10 ? `91${rawDigits}` : rawDigits;
      const waMsg = encodeURIComponent(`Hi ${name.trim()}, this is Balaji Sarabu from Balaji Projects .P. Thank you for your inquiry regarding "${safeProjectType}".`);
      waLink = `https://wa.me/${formattedDigits}?text=${waMsg}`;
    }

    const nowIST = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const plainTextContent = `
============================================================
🚨 NEW CLIENT INQUIRY — BALAJI PROJECTS .P
============================================================

• SENDER / PROSPECT: ${name.trim()}
• EMAIL:             ${email.trim()}
• PHONE / WHATSAPP:  ${phoneOrWhatsapp ? phoneOrWhatsapp.trim() : 'Not provided'}
• INQUIRY MODE:      ${safeMode}
• PROJECT TYPE:      ${safeProjectType}
• TARGET TIMELINE:   ${safeTimeline}
• DISPATCH TIME:     ${nowIST} (IST)

------------------------------------------------------------
PROJECT SCOPE & REQUIREMENTS:
------------------------------------------------------------
${message.trim()}

============================================================
Source: https://balajiprojectsp.in/contact
Reply Directly: mailto:${email.trim()}
${waLink ? `WhatsApp Lead: ${waLink}` : ''}
============================================================
    `.trim();

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Inquiry from ${safeName}</title>
</head>
<body style="margin: 0; padding: 24px 12px; background-color: #06101E; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F6FAFD;">
  <div style="max-width: 640px; margin: 0 auto; background-color: #0A1931; border: 1px solid #1A3D63; border-radius: 18px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.45);">
    
    <!-- Top Accent Bar -->
    <div style="height: 4px; background: linear-gradient(90deg, #1A3D63 0%, #4A7FA7 50%, #B3CFE5 100%);"></div>

    <!-- Header Section -->
    <div style="padding: 28px 32px 24px 32px; background: linear-gradient(180deg, #0f274a 0%, #0A1931 100%); border-bottom: 1px solid #1A3D63;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <span style="display: inline-block; padding: 4px 12px; background: rgba(74, 127, 167, 0.2); border: 1px solid #4A7FA7; border-radius: 999px; font-size: 11px; font-family: ui-monospace, Menlo, Consolas, monospace; font-weight: 700; color: #B3CFE5; letter-spacing: 0.08em; text-transform: uppercase;">
          ⚡ NEW CLIENT INQUIRY
        </span>
        <span style="display: inline-block; padding: 4px 10px; background: #06101E; border: 1px solid #1A3D63; border-radius: 6px; font-size: 11px; font-family: ui-monospace, Menlo, Consolas, monospace; color: #809FB9;">
          ${safeMode}
        </span>
      </div>

      <h1 style="margin: 8px 0 4px 0; font-size: 24px; line-height: 1.3; font-weight: 700; color: #FFFFFF; letter-spacing: -0.01em;">
        ${safeName}
      </h1>
      <p style="margin: 0; font-size: 14px; color: #B3CFE5; font-weight: 400;">
        Interested in <strong style="color: #FFFFFF;">${safeProjectType}</strong>
      </p>
    </div>

    <!-- Body Section -->
    <div style="padding: 28px 32px;">
      
      <!-- Lead Details Table -->
      <div style="background-color: #081427; border: 1px solid #1A3D63; border-radius: 12px; padding: 6px 20px; margin-bottom: 24px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(179, 207, 229, 0.1); color: #809FB9; font-size: 12px; font-family: ui-monospace, Menlo, Consolas, monospace; text-transform: uppercase; width: 140px; letter-spacing: 0.05em;">
              Client Name
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(179, 207, 229, 0.1); color: #FFFFFF; font-size: 15px; font-weight: 600;">
              ${safeName}
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(179, 207, 229, 0.1); color: #809FB9; font-size: 12px; font-family: ui-monospace, Menlo, Consolas, monospace; text-transform: uppercase; letter-spacing: 0.05em;">
              Email Address
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(179, 207, 229, 0.1); color: #B3CFE5; font-size: 15px; font-weight: 600;">
              <a href="mailto:${safeEmail}" style="color: #B3CFE5; text-decoration: underline;">${safeEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(179, 207, 229, 0.1); color: #809FB9; font-size: 12px; font-family: ui-monospace, Menlo, Consolas, monospace; text-transform: uppercase; letter-spacing: 0.05em;">
              Phone / WhatsApp
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(179, 207, 229, 0.1); color: #FFFFFF; font-size: 15px; font-weight: 500;">
              ${
                safePhone
                  ? `<a href="tel:${safePhone}" style="color: #25D366; text-decoration: none; font-weight: 600;">${safePhone}</a>`
                  : '<span style="color: #63809C; font-style: italic;">Not provided</span>'
              }
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(179, 207, 229, 0.1); color: #809FB9; font-size: 12px; font-family: ui-monospace, Menlo, Consolas, monospace; text-transform: uppercase; letter-spacing: 0.05em;">
              Solution Scope
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(179, 207, 229, 0.1); color: #FFFFFF; font-size: 14px; font-weight: 600;">
              <span style="display: inline-block; padding: 3px 10px; background: rgba(74,127,167,0.25); border: 1px solid #4A7FA7; border-radius: 6px; color: #B3CFE5;">
                ${safeProjectType}
              </span>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #809FB9; font-size: 12px; font-family: ui-monospace, Menlo, Consolas, monospace; text-transform: uppercase; letter-spacing: 0.05em;">
              Desired Timeline
            </td>
            <td style="padding: 12px 0; color: #FFFFFF; font-size: 14px; font-weight: 500;">
              <span style="display: inline-block; padding: 3px 10px; background: rgba(179,207,229,0.1); border: 1px solid rgba(179,207,229,0.25); border-radius: 6px; color: #F6FAFD;">
                ⏱ ${safeTimeline}
              </span>
            </td>
          </tr>
        </table>
      </div>

      <!-- Message Requirements Box -->
      <div style="margin-bottom: 28px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
          <span style="font-size: 12px; font-family: ui-monospace, Menlo, Consolas, monospace; color: #809FB9; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">
            Project Requirements & Message Brief:
          </span>
        </div>
        <div style="background-color: #0E223D; border: 1px solid #1A3D63; border-radius: 12px; padding: 20px; color: #F6FAFD; font-size: 14px; line-height: 1.7; white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
${safeMessage}
        </div>
      </div>

      <!-- Quick Action Buttons -->
      <div style="padding: 18px; background: #081427; border: 1px solid #1A3D63; border-radius: 12px; text-align: center;">
        <p style="margin: 0 0 14px 0; font-size: 12px; color: #809FB9; font-family: ui-monospace, Menlo, Consolas, monospace; text-transform: uppercase;">
          Quick Response Actions
        </p>
        <div style="display: inline-block;">
          <a href="mailto:${safeEmail}?subject=Re:%20Inquiry%20from%20Balaji%20Projects%20.P" style="display: inline-block; padding: 11px 22px; background: #4A7FA7; color: #FFFFFF; text-decoration: none; font-size: 13px; font-weight: 600; border-radius: 8px; margin: 4px;">
            ✉️ Reply via Email
          </a>
          ${
            waLink
              ? `<a href="${waLink}" style="display: inline-block; padding: 11px 22px; background: #25D366; color: #FFFFFF; text-decoration: none; font-size: 13px; font-weight: 600; border-radius: 8px; margin: 4px;">
                  💬 Open in WhatsApp
                </a>`
              : ''
          }
        </div>
      </div>

    </div>

    <!-- Footer -->
    <div style="padding: 18px 32px; background-color: #06101E; border-top: 1px solid #1A3D63; font-size: 11px; font-family: ui-monospace, Menlo, Consolas, monospace; color: #63809C; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
      <div>
        <span>Origin: </span>
        <a href="https://balajiprojectsp.in/contact" style="color: #4A7FA7; text-decoration: none;">balajiprojectsp.in/contact</a>
      </div>
      <div style="margin-top: 4px;">
        <span>Dispatched: ${nowIST}</span>
      </div>
    </div>

  </div>
</body>
</html>
    `.trim();

    const info = await transporter.sendMail({
      from: `"Balaji Projects .P Contact" <${user}>`,
      to: toEmail,
      replyTo: email.trim(),
      subject: `🚨 [New Client Inquiry] ${safeProjectType} — from ${safeName}`,
      text: plainTextContent,
      html: htmlContent
    });

    console.log('Contact email dispatched successfully. ID:', info.messageId);

    return res.status(200).json({
      success: true,
      message: `Thank you, ${safeName}! Your inquiry has been sent directly to Balaji Sarabu. I will review your requirements and respond within 24 hours.`
    });
  } catch (error) {
    console.error('API Contact Submission Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to transmit message. Please reach out directly to sarabu.balaji9985@gmail.com or WhatsApp +91 9030545655.'
    });
  }
}
