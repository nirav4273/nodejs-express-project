
import { encryptInput } from '../utils/encrypt'

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'active'
    },
    token: DataTypes.STRING
  }, {
    freezeTableName: true,
    timestamps: true
  })

  user.beforeCreate(async (user, options) => {
    user.password = await encryptInput(user.password)
  })

  return user
}
