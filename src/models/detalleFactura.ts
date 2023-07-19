import { sequelize } from "../db/database";
import {  DataTypes } from "sequelize";
import { Factura } from "./factura";
import { Producto } from "./producto";



//             modelo                     tabla
export const DtFactura = sequelize.define('detalleFactura ', {

    nro_factura:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    nro_item:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    cantidad:{
        type:DataTypes.FLOAT,
        defaultValue:1.0
    },
    codigo_producto:{
        type:DataTypes.STRING,
        allowNull:true,
    }

},{timestamps:false})
  DtFactura.belongsTo(Factura, {foreignKey:'nro_factura'})
  DtFactura.belongsTo(Producto, {foreignKey:'nro_producto'})
    


