/**
 *  /api/v1
 */

import { Router } from 'express';
import bodyParser from 'body-parser';
import rider from './rider.route';

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

export default router;
