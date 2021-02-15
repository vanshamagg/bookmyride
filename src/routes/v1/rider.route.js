/**
 *  /api/v1/rider
 */

import { Router } from 'express';
import controllers from '../../controllers/v1/rider.controller';
import jwt from '../../services/jwt';

const router = Router()

router.post('/', controllers.register)
router.get('/', jwt,  controllers.get)
export default router;