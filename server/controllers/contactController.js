import { sendContactEmail } from '../services/emailService.js';

export const handleContactSubmit = async (req, res) => {
  try {
    const { name, email, projectType, budget, message } = req.body;

    await sendContactEmail({ name, email, projectType, budget, message });

    return res.status(200).json({
      success: true,
      message: 'Thank you for reaching out, ' + name + '! Your message has been received. I will review your requirements and respond within 24 hours.'
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return res.status(500).json({
      success: false,
      message: 'An unexpected error occurred while transmitting your message. Please reach out directly to balaji.sarabu@example.com or try again.'
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
