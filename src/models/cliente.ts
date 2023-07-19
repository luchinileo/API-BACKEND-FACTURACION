import { sequelize } from "../db/database";
import {  DataTypes } from "sequelize";




export const Cliente = sequelize.define('cliente', {

    nro_cliente:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    apellido:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    direccion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    activo:{
        type:DataTypes.TINYINT,
        defaultValue:1,
    }
},
    {timestamps:false})
    
    
    


