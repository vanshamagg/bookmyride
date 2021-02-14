/**
 * /api/v1/auth
 */

import { Router } from 'express';
import controllers from '../../controllers/v1/auth.controller';
import passport from '../../services/passport-auth';

const router = Router();

// MIDDLEWARE
router.use(passport.initialize());

router.post('/', passport.authenticate('local', { session: false }), controllers.giveToken);
export default router;
