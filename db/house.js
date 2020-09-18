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
    houseTagIds: { type: DataTypes.STRING(25) },
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
    operateId: { type: DataTypes.INTEGER(10).UNSIGNED.ZEROFILL },
    state: { type: DataTypes.INTEGER, defaultValue: 0 },
    stick: { type: DataTypes.INTEGER, defaultValue: 0 },
    shareTitle: { type: DataTypes.STRING(300), defaultValue: ''},
    shareContent: { type: DataTypes.STRING(300), defaultValue: ''},
    shareImg: { type: DataTypes.STRING(300), defaultValue: ''},
    isGreenCard: { type: DataTypes.INTEGER, defaultValue: 0},
    greenCardUrl: { type: DataTypes.STRING(300), defaultValue: ''},
}, {
    sequelize: db,
    tableName: 'house',
    timestamps:  false
})

export default House

