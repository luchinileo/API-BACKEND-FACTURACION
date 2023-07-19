import { sequelize } from "../db/database";
import {  DataTypes } from "sequelize";



//             modelo                     tabla
export const Producto = sequelize.define('producto ', {

    codigo_producto:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    marca:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    precio:{
        type:DataTypes.FLOAT,
        defaultValue:1.0
    },
    stock:{
        type:DataTypes.INTEGER,
    }

},{timestamps:false})
  //timestamps: nos dice cuando se creo
  // y si alguin lo modifico  lo dejamos en falso asi no lo usamos
    
    


