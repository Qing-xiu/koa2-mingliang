import pkg from 'sequelize'
const { Sequelize } = pkg

// const db = new Sequelize('mlweb', 'root', '1q2w3e4r!@#$QWER', {
//     host: '47.92.142.156',
//     dialect: 'mysql'
// })

const db = new Sequelize('simpleML', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

export const test = async () => {
    try{
        await db.authenticate()
        console.log('seq connect success')
    } catch (error) {
        console.error(error)
    }
}

export default db


