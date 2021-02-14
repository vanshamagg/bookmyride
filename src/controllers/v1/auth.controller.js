/**
 * controllers for /api/v1/auth
 */
import jwt from 'jsonwebtoken';
import 'dotenv/config';
/**
 * give a jwt
 */
function giveToken(req, res) {
  try {
    //   if any errors, send error
    if (req.error) throw req.error;

    const payload = {
        id: req.user.id
    }
    const encoded = jwt.sign(payload, process.env.JWT_SECRET_DEV, {expiresIn: process.env.JWT_EXPIRY})
    res.json({token: encoded});
  } catch (error) {
    res.status(400).json({ error: error.message || error });
  }
}

const controllers = {};
controllers.giveToken = giveToken;

export default controllers;
