import Sequelize from 'sequelize'
import db from './index.js'

const { Model, DataTypes } = Sequelize

class House extends Model {

}

House.init({
    name: { type: DataTypes.STRING(100) },
    developer: { type: DataTypes.STRING(100) },
    equity: { type: DataTypes.STRING(15) },
    houseType: { type: DataTypes.STRING(15) },
    decorate: { type: DataTypes.STRING(15) },
    handingTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    loans: { type: DataTypes.STRING(15) },
    incisePay: { type: DataTypes.STRING(15) },
    houseState: { type: DataTypes.STRING(15) },
    info: { type: DataTypes.STRING(200) },
    htmlInfo: { type: DataTypes.TEXT },
    minPrice: { type: DataTypes.INTEGER },
    maxPrice: { type: DataTypes.INTEGER },
    increasePercent: { type: DataTypes.INTEGER },
    countryId: { type: DataTypes.INTEGER },
    countryStr: { type: DataTypes.STRING(10) },
    provinceId: { type: DataTypes.INTEGER },
    provinceStr: { type: DataTypes.STRING(10) },
    firstpayPercent: { type: DataTypes.INTEGER },
    rentPercent: { type: DataTypes.INTEGER },
    createTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    putawayTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updateTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    state: { type: DataTypes.INTEGER, defaultValue: 0 },
    stick: { type: DataTypes.INTEGER, defaultValue: 0 },
    isGreenCard: { type: DataTypes.INTEGER, defaultValue: 0},
    greenCardUrl: { type: DataTypes.STRING(300), defaultValue: ''},
}, {
    sequelize: db,
    tableName: 'house',
    timestamps:  false
})

export default House

