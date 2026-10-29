import { sendContactEmail } from '../services/emailService.js';

export const handleContactSubmit = async (req, res) => {
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

    if (website_trap) {
      return res.status(200).json({
        success: true,
        message: 'Inquiry received successfully.'
      });
    }

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide your name, email, and requirements.'
      });
    }

    await sendContactEmail({
      name,
      email,
      phoneOrWhatsapp,
      projectType,
      timeline,
      formMode,
      message,
    });

    return res.status(200).json({
      success: true,
      message: `Thank you, ${name}! Your inquiry has been sent directly to Balaji Sarabu. I will review your requirements and respond within 24 hours.`
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return res.status(500).json({
      success: false,
      message: 'An unexpected error occurred while transmitting your message. Please reach out directly to sarabu.balaji9985@gmail.com or WhatsApp +91 9030545655.'
    });
  }
};

export const checkHealth = (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'Balaji Portfolio API',
    timestamp: new Date().toISOString()
  });
};
