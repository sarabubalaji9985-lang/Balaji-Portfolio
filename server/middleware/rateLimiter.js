/**
 * In-memory IP rate limiter for public contact form
 * Limits to 5 submissions per 15 minutes per IP.
 */
const requestCounts = new Map();

export const rateLimiter = (options = { windowMs: 15 * 60 * 1000, max: 5 }) => {
  return (req, res, next) => {
    const ip = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    const now = Date.now();
    
    // Clean up expired entries periodically
    if (requestCounts.size > 1000) {
      for (const [key, record] of requestCounts.entries()) {
        if (now - record.startTime > options.windowMs) {
          requestCounts.delete(key);
        }
      }
    }

    const record = requestCounts.get(ip) || { count: 0, startTime: now };

    if (now - record.startTime > options.windowMs) {
      record.count = 1;
      record.startTime = now;
      requestCounts.set(ip, record);
      return next();
    }

    if (record.count >= options.max) {
      return res.status(429).json({
        success: false,
        message: 'Too many contact requests from this connection. Please try again after a few minutes or reach out via direct email.'
      });
    }

    record.count += 1;
    requestCounts.set(ip, record);
    next();
  };
};
