import { sequelize } from "../db/database";
import {  DataTypes } from "sequelize";
import { Cliente } from "./cliente";




export const Direccion = sequelize.define('direccion', {

    nro_casa:{
        type:DataTypes.INTEGER,
        //allowNull:false,
        primaryKey:true,
    },
    localidad:{
        type:DataTypes.STRING,
        //allowNull:false,
        primaryKey:true,
    },
    calle:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    codigo_postal:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    nro_cliente:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
    }
},{timestamps:false})

Direccion.belongsTo(Cliente, {foreignKey:'nro_cliente'})

    
  
    
    


