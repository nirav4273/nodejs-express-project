
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    phone: DataTypes.BIGINT
  }, {
    freezeTableName: true,
    timestamps: true
  })

  return user
}
