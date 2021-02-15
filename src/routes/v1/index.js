/**
 *  /api/v1
 */

import { Router } from 'express';
import bodyParser from 'body-parser';
import rider from './rider.route';
import vehicle from './vehicle.route'
import auth from './auth.route';


const router = Router();

// MIDDLEWARES

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }))

;
router.get('/', (req, res) => {
  res.send('WELCOME TO V1');
});

// MOUNTED ROUTERS
router.use('/rider', rider);
router.use('/auth', auth);
router.use('/vehicle', vehicle)

export default router;
