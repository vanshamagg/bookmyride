import 'dotenv/config';
import { Sequelize } from 'sequelize';
import 'colors';

import RiderSchema from './Rider.model';
import VehicleSchema from './Vehicle.model';

const sequelize = new Sequelize(process.env.HEROKU_DB_URI, {
  logging: false,
  dialectOptions: {
    ssl: {
      ssl: true,
      rejectUnauthorized: false,
    },
  },
});
// some preflight
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the Db Established'.bold.white);

    await sequelize.sync({
      /* force: true */
    });
    console.log('All models synchronized'.bold.white);
  } catch (err) {
    console.log(`ERROR : ${err.message}`.bold.red);
  }
})();

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const Rider = RiderSchema(sequelize, Sequelize);
const Vehicle = VehicleSchema(sequelize, Sequelize);
/**
 * ======================================
 *              ASSOCIATIONS
 * ======================================
 */

// a rider can ride many vehicles
// a vehicle can have only one rider

Rider.hasMany(Vehicle);
Vehicle.belongsTo(Rider, { as: 'Rides' });


export default db;
export { sequelize, Sequelize, Rider, Vehicle };
