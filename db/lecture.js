import Sequelize from 'sequelize'
import db from './index.js'

const { Model, DataTypes } = Sequelize

class Lecture extends Model {

}

Lecture.init({
    name: { type: DataTypes.STRING(100) },
    info: { type: DataTypes.STRING(1000) },
    coverImg: { type: DataTypes.STRING(300) },
    openTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    startTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    endTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    cityId: { type: DataTypes.INTEGER, defaultValue: 0 },
    cityStr: { type: DataTypes.STRING(10) },
    siteName: { type: DataTypes.STRING(50) },
    addressDetail: { type: DataTypes.STRING(500) },
    createTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updateTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    putawayTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    state: { type: DataTypes.INTEGER, defaultValue: 0 },
    detail: { type: DataTypes.TEXT },
    operateId: { type: DataTypes.INTEGER(10).UNSIGNED.ZEROFILL },
    historyImgList: { type: DataTypes.STRING(3000) }
}, {
    sequelize: db,
    tableName: 'lecture',
    timestamps:  false
})

export default Lecture

