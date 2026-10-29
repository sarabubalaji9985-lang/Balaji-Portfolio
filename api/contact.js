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
      const waMsg = encodeURIComponent(`Hi ${name.trim()}, this is Balaji Sarabu from Balaji Projects .P. Thank you for reaching out regarding "${safeProjectType}".`);
      waLink = `https://wa.me/${formattedDigits}?text=${waMsg}`;
    }

    const nowIST = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    }) + ' IST';

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
• DISPATCH TIME:     ${nowIST}

------------------------------------------------------------
PROJECT REQUIREMENTS & MESSAGE BRIEF:
------------------------------------------------------------
${message.trim()}

============================================================
Source: https://balajiprojectsp.in/contact
Reply Directly: mailto:${email.trim()}
${waLink ? `WhatsApp Lead: ${waLink}` : ''}
============================================================
    `.trim();

    // Mobile-first, fluid responsive email HTML design
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Inquiry from ${safeName}</title>
</head>
<body style="margin: 0; padding: 12px 6px; background-color: #06101E; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F6FAFD; -webkit-text-size-adjust: 100%;">
  
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 580px; margin: 0 auto; background-color: #0A1931; border: 1px solid #1A3D63; border-radius: 14px; overflow: hidden; box-shadow: 0 16px 36px rgba(0,0,0,0.5);">
    
    <!-- Top Accent Bar -->
    <tr>
      <td height="4" style="background: linear-gradient(90deg, #1A3D63 0%, #4A7FA7 50%, #B3CFE5 100%); font-size: 0; line-height: 0;">&nbsp;</td>
    </tr>

    <!-- Header -->
    <tr>
      <td style="padding: 20px 18px 16px 18px; background: linear-gradient(180deg, #0e2444 0%, #0A1931 100%); border-bottom: 1px solid #1A3D63;">
        <div style="margin-bottom: 10px;">
          <span style="display: inline-block; padding: 4px 10px; background: rgba(74, 127, 167, 0.25); border: 1px solid #4A7FA7; border-radius: 999px; font-size: 10px; font-family: ui-monospace, Menlo, Consolas, monospace; font-weight: 700; color: #B3CFE5; letter-spacing: 0.06em; text-transform: uppercase; margin-right: 6px; margin-bottom: 4px;">
            ⚡ NEW CLIENT INQUIRY
          </span>
          <span style="display: inline-block; padding: 4px 8px; background: #06101E; border: 1px solid #1A3D63; border-radius: 6px; font-size: 10px; font-family: ui-monospace, Menlo, Consolas, monospace; color: #809FB9; margin-bottom: 4px;">
            ${safeMode}
          </span>
        </div>

        <h1 style="margin: 0 0 6px 0; font-size: 20px; line-height: 1.3; font-weight: 700; color: #FFFFFF; letter-spacing: -0.01em;">
          ${safeName}
        </h1>
        <p style="margin: 0; font-size: 13px; color: #B3CFE5; font-weight: 400;">
          Requirement: <strong style="color: #FFFFFF;">${safeProjectType}</strong>
        </p>
      </td>
    </tr>

    <!-- Content Body -->
    <tr>
      <td style="padding: 18px 16px;">
        
        <!-- Stacked Card for Mobile-Friendly readability -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #081427; border: 1px solid #1A3D63; border-radius: 12px; margin-bottom: 20px;">
          
          <!-- Client Name -->
          <tr>
            <td style="padding: 12px 14px; border-bottom: 1px solid rgba(179, 207, 229, 0.1);">
              <div style="font-size: 10px; font-family: ui-monospace, Menlo, monospace; color: #809FB9; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 3px;">
                👤 Client Name
              </div>
              <div style="font-size: 15px; font-weight: 600; color: #FFFFFF;">
                ${safeName}
              </div>
            </td>
          </tr>

          <!-- Email -->
          <tr>
            <td style="padding: 12px 14px; border-bottom: 1px solid rgba(179, 207, 229, 0.1);">
              <div style="font-size: 10px; font-family: ui-monospace, Menlo, monospace; color: #809FB9; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 3px;">
                ✉️ Email Address
              </div>
              <div style="font-size: 14px; font-weight: 500; word-break: break-all;">
                <a href="mailto:${safeEmail}" style="color: #60A5FA; text-decoration: underline;">
                  ${safeEmail}
                </a>
              </div>
            </td>
          </tr>

          <!-- Phone / WhatsApp -->
          <tr>
            <td style="padding: 12px 14px; border-bottom: 1px solid rgba(179, 207, 229, 0.1);">
              <div style="font-size: 10px; font-family: ui-monospace, Menlo, monospace; color: #809FB9; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 3px;">
                📱 Phone / WhatsApp
              </div>
              <div style="font-size: 15px; font-weight: 600;">
                ${
                  safePhone
                    ? `<a href="tel:${safePhone}" style="color: #34D399; text-decoration: none;">${safePhone}</a>`
                    : '<span style="color: #63809C; font-style: italic;">Not provided</span>'
                }
              </div>
            </td>
          </tr>

          <!-- Solution Scope & Timeline -->
          <tr>
            <td style="padding: 12px 14px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="50%" valign="top" style="padding-right: 8px;">
                    <div style="font-size: 10px; font-family: ui-monospace, Menlo, monospace; color: #809FB9; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px;">
                      🎯 Scope
                    </div>
                    <span style="display: inline-block; padding: 4px 8px; background: rgba(74,127,167,0.25); border: 1px solid #4A7FA7; border-radius: 6px; color: #B3CFE5; font-size: 12px; font-weight: 600;">
                      ${safeProjectType}
                    </span>
                  </td>
                  <td width="50%" valign="top" style="padding-left: 8px;">
                    <div style="font-size: 10px; font-family: ui-monospace, Menlo, monospace; color: #809FB9; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px;">
                      ⏱ Timeline
                    </div>
                    <span style="display: inline-block; padding: 4px 8px; background: rgba(179,207,229,0.1); border: 1px solid rgba(179,207,229,0.25); border-radius: 6px; color: #F6FAFD; font-size: 12px; font-weight: 500;">
                      ${safeTimeline}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>

        <!-- Message Requirements Box -->
        <div style="margin-bottom: 20px;">
          <div style="font-size: 11px; font-family: ui-monospace, Menlo, monospace; color: #809FB9; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 600; margin-bottom: 8px;">
            📝 Requirements & Message:
          </div>
          <div style="background-color: #0E223D; border: 1px solid #1A3D63; border-radius: 12px; padding: 16px; color: #F6FAFD; font-size: 14px; line-height: 1.6; word-break: break-word; white-space: pre-wrap;">
${safeMessage}
          </div>
        </div>

        <!-- Quick Response Action Buttons (Stacked, Full-Width for Easy Mobile Tap) -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #081427; border: 1px solid #1A3D63; border-radius: 12px;">
          <tr>
            <td style="padding: 16px; text-align: center;">
              <div style="font-size: 11px; color: #809FB9; font-family: ui-monospace, Menlo, monospace; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">
                ⚡ Quick Response Actions
              </div>

              <!-- Button 1: Reply via Email -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 8px;">
                <tr>
                  <td align="center" style="background-color: #4A7FA7; border-radius: 10px;">
                    <a href="mailto:${safeEmail}?subject=Re:%20Inquiry%20from%20Balaji%20Projects%20.P" style="display: block; padding: 12px 16px; color: #FFFFFF; text-decoration: none; font-size: 14px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                      ✉️ Reply via Email
                    </a>
                  </td>
                </tr>
              </table>

              ${
                waLink
                  ? `<!-- Button 2: WhatsApp -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="background-color: #25D366; border-radius: 10px;">
                    <a href="${waLink}" style="display: block; padding: 12px 16px; color: #FFFFFF; text-decoration: none; font-size: 14px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                      💬 Chat on WhatsApp
                    </a>
                  </td>
                </tr>
              </table>`
                  : ''
              }
            </td>
          </tr>
        </table>

      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 14px 16px; background-color: #06101E; border-top: 1px solid #1A3D63; font-size: 11px; font-family: ui-monospace, Menlo, monospace; color: #63809C; text-align: center;">
        <div>
          Sent from <a href="https://balajiprojectsp.in/contact" style="color: #4A7FA7; text-decoration: none;">balajiprojectsp.in/contact</a>
        </div>
        <div style="margin-top: 4px; color: #4B637B;">
          ${nowIST}
        </div>
      </td>
    </tr>

  </table>

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
