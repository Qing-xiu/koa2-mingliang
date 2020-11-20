import Sequelize from 'sequelize'
import db from './index.js'

const { Model, DataTypes } = Sequelize

class Area extends Model {

}

Area.init({
    name: { type: DataTypes.STRING(15) },
    parentId: { type: DataTypes.INTEGER },
    createTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    orderNumber: { type: DataTypes.INTEGER, defaultValue: 0},
    pinyin:  { type: DataTypes.STRING(50) }
}, {
    sequelize: db,
    tableName: 'area',
    timestamps:  false
})

export default Area

