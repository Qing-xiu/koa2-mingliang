import Sequelize from 'sequelize'
import db from './index.js'

const { Model, DataTypes } = Sequelize

class Message extends Model {

}

Message.init({
    title: { type: DataTypes.STRING(150) },
    content: { type: DataTypes.TEXT },
    createTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    putawayTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updateTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    operateId: { type: DataTypes.INTEGER(10).UNSIGNED.ZEROFILL },
    type: { type: DataTypes.INTEGER, defaultValue: 0 },
    state: { type: DataTypes.INTEGER, defaultValue: 1 },
    stick: { type: DataTypes.INTEGER, defaultValue: 0 },
    countryId: { type: DataTypes.INTEGER },
    countryStr: { type: DataTypes.STRING(20) },
    img: { type: DataTypes.STRING(300) },
    subtitle: { type: DataTypes.STRING(1000) },
}, {
    sequelize: db,
    tableName: 'message',
    timestamps:  false
})

export default Message

