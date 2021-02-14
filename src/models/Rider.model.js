//  database model for rider

export default (sequelize, Sequelize) => {
  const DataTypes = Sequelize.DataTypes;
  const Rider = sequelize.define('rider', {
    firstname: { type: DataTypes.STRING(50), allowNull: false },
    middlename: { type: DataTypes.STRING(50), allowNull: true },
    dob: { type: DataTypes.DATE, allowNull: false },
    gender: { type: DataTypes.STRING(1), allowNull: false },
    address: { type: DataTypes.TEXT, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    state: { type: DataTypes.STRING, allowNull: false },
    country: { type: DataTypes.STRING, allowNull: false },
    mobile: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: {type: DataTypes.STRING(20), allowNull: false}
  });
  return Rider;
};
