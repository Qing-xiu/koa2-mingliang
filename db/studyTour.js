import Sequelize from 'sequelize'
import db from './index.js'

const { Model, DataTypes } = Sequelize

class StudyTour extends Model {

}

StudyTour.init({
    name: { type: DataTypes.STRING(100) },
    info: { type: DataTypes.STRING(500) },
    startTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    endTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    fee: { type: DataTypes.INTEGER, defaultValue: 0 },
    createTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    putawayTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updateTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    countryId: { type: DataTypes.INTEGER, defaultValue: 0 },
    countryStr: { type: DataTypes.STRING(10) },
    provinceId: { type: DataTypes.INTEGER, defaultValue: 0 },
    provinceStr: { type: DataTypes.STRING(10) },
    detail: { type: DataTypes.TEXT },
    state: { type: DataTypes.INTEGER, defaultValue: 0 },
}, {
    sequelize: db,
    tableName: 'study_tour',
    timestamps:  false
})

export default StudyTour

