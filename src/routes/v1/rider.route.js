/**
 *  /api/v1/rider
 */

import { Router } from 'express';
import controllers from '../../controllers/v1/rider.controller';

const router = Router()

router.post('/', controllers.register)
router.get('/')
export default router;