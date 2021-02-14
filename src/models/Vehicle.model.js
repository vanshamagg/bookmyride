//  database model for a vehicle

export default (sequelize, Sequelize) => {
  const DataTypes = Sequelize.DataTypes;
  const Vehicle = sequelize.define('vehicle', {
    regnumber: { type: DataTypes.STRING(12), allowNull: false, unique: true },
    city: { type: DataTypes.STRING, allowNull: false },
    state: { type: DataTypes.STRING, allowNull: false },
    country: { type: DataTypes.STRING, allowNull: false },
  });
  return Vehicle;
};
