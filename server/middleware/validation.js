/**
 * Server-side input validation for contact form
 */
export const validateContactInput = (req, res, next) => {
  const { name, email, projectType, message, budget } = req.body;
  const errors = {};

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.name = 'Please provide a valid name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    errors.message = 'Please provide a descriptive project outline (at least 10 characters).';
  }

  // Honeypot field check to thwart automated bots
  if (req.body.website_trap && req.body.website_trap.length > 0) {
    return res.status(400).json({ success: false, message: 'Invalid submission.' });
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed on submitted fields.',
      errors
    });
  }

  // Sanitize values
  req.body.name = name.trim();
  req.body.email = email.trim().toLowerCase();
  req.body.message = message.trim();
  req.body.projectType = (projectType && typeof projectType === 'string') ? projectType.trim() : 'General Inquiry';
  req.body.budget = (budget && typeof budget === 'string') ? budget.trim() : 'Not Specified';

  next();
};
