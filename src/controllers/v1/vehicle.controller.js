/**
 * CONTROLLERS FOR /api/v1/vehicle
 */
import { Rider } from '../../models';
/**
 * registers a new vehicle for a logged in user
 */

async function register(req, res) {
  try {
    const uid = req.user.id;
    const { regnumber, city, state, country } = req.body;
    const rider = await Rider.findByPk(uid);

    // register a new vehicle
    const vehicle = await rider.createVehicle({
      regnumber,
      city,
      state,
      country,
    });

    res.send(vehicle);
  } catch (error) {
    res.status(400).json({ error: error.message || error });
  }
}

async function remove(req, res) {
  try {
    const uid = req.user.id;
    const query = req.query;

    // get the rider first
    const rider = await Rider.findByPk(uid);

    // get the vehicle
    const vehicle = await rider.getVehicles({
      where: { id: query.id },
    });

    console.log(vehicle)
    if (vehicle.length <= 0)
      throw new Error(`The rider ${rider.firstname} with id ${rider.id} does not have any such vehicle.`);

    // remove the vehicle for the user
    await rider.removeVehicle(vehicle[0]);


    res.json({ message: `removed vehicle id ${vehicle.id}` });
  } catch (error) {
    res.status(400).json({ error: error.message || error });
  }
}
const controllers = {};
controllers.register = register;
controllers.remove = remove;

export default controllers;
