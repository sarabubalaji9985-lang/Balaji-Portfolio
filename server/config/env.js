import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
  smtp: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    secure: process.env.SMTP_SECURE === 'true' || true,
    user: process.env.SMTP_USER || 'sarabu.balaji9985@gmail.com',
    pass: (process.env.SMTP_PASS || 'oiarkegxdtmgyabu').replace(/\s+/g, ''),
    fromEmail: process.env.EMAIL_FROM || 'sarabu.balaji9985@gmail.com',
    toEmail: process.env.EMAIL_TO || 'sarabu.balaji9985@gmail.com'
  }
};
