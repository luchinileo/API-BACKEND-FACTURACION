import{Sequelize} from 'sequelize'

export const sequelize = new Sequelize('facturacion3','root','1234',{
    host:'localhost',
    dialect: 'mysql'
})