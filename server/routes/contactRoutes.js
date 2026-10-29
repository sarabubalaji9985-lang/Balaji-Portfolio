import { Router } from 'express';
import { handleContactSubmit, checkHealth } from '../controllers/contactController.js';
import { validateContactInput } from '../middleware/validation.js';
import { rateLimiter } from '../middleware/rateLimiter.js';

const router = Router();

router.get('/health', checkHealth);
router.post('/contact', rateLimiter({ windowMs: 15 * 60 * 1000, max: 5 }), validateContactInput, handleContactSubmit);

export default router;
