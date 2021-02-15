/**
 *  /api/v1/vehicle
 */

import { Router } from 'express';
import controllers from '../../controllers/v1/vehicle.controller';
import jwt from '../../services/jwt';

const router = Router();

router.post('/new', jwt,  controllers.register);
router.delete('/', jwt, controllers.remove)

export default router;
