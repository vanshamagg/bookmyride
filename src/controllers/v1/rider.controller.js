/**
 *  controllers fro /api/v1/rider
 */
import 'dotenv/config';
import { Rider } from '../../models';
import bcrypt from 'bcryptjs';
/**
 * regsiter a rider
 */
async function register(req, res) {
  try {
    const { firstname, lastname, dob, gender, address, city, state, country, mobile, password } = req.body;

    const SALT = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS))
    const hashedPassword = await bcrypt.hash(password, SALT);

    const rider = await Rider.create({
      firstname,
      lastname,
      dob,
      gender,
      address,
      city,
      state,
      country,
      mobile,
      password: hashedPassword,
    });

    res.status(200).json(rider);
  } catch (error) {
    res.status(400).json({ error: error.message || error });
  }
}

/**
 * get details for the currently logged in user
 */
async function get(req, res) {
  try {

  } catch (error) {
    res.status(400).json({ error: error.message || error });
  }
}
const controllers = {};
controllers.register = register;
controllers.get = get;

export default controllers;
