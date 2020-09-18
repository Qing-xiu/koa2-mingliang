import Sequelize from 'sequelize'
import db from './index.js'

const { Model, DataTypes } = Sequelize

class User extends Model {

}

User.init({
    name: { type: DataTypes.STRING(15) },
    mobile: { type: DataTypes.STRING(18) },
    password: { type: DataTypes.STRING(50) },
    token: { type: DataTypes.STRING(50) },
    tokenOverTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    createTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    state:  { type: DataTypes.INTEGER, defaultValue: 1 },
    roleId: { type: DataTypes.INTEGER },
    department: { type: DataTypes.STRING(50) },
    email: { type: DataTypes.STRING(50) },
    updateTime:  { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    operateId: { type: DataTypes.INTEGER(10).UNSIGNED.ZEROFILL },
}, {
    sequelize: db,
    tableName: 'user',
    timestamps:  false
})

export default User

