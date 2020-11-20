import Sequelize from 'sequelize'
import db from './index.js'

const { Model, DataTypes } = Sequelize

class Module extends Model {

}

Module.init({
    title: { type: DataTypes.STRING(150) },
    content: { type: DataTypes.TEXT },
    createTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    putawayTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updateTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    type: { type: DataTypes.INTEGER, defaultValue: 0 },
    state: { type: DataTypes.INTEGER, defaultValue: 1 }
}, {
    sequelize: db,
    tableName: 'module',
    timestamps:  false
})

export default Module

