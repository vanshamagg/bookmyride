/**
 *      Passport Strategies
 */

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Rider } from '../models';
import bcrypt from 'bcryptjs';
import 'colors';

passport.use(
  new LocalStrategy(
    {
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      try {
        const rider = await Rider.findOne({
          where: {
            mobile: username,
          },
        });

        if (!rider) throw new Error('User not found');

        const isPasswordCorrect = await bcrypt.compare(password, rider.password)
        if (isPasswordCorrect) {
          done(null, rider);
        } else {
          throw new Error('Wrong password');
        }
      } catch (error) {
        console.log(error.message.red.bold);

        req.error = error;

        done(null, {});
      }
    },
  ),
);

export default passport;
