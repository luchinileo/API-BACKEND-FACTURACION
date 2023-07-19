import { sequelize } from "../db/database";
import {  DataTypes, Model } from "sequelize";
import { Cliente } from "./cliente";

interface IFactura {
    nro_factura:number,
    fecha:Date,
    total_sin_iva:number,
    total_con_iva:number,
    iva:number,
    nro_cliente?:number
} 



interface IFacturaModel extends Model<IFactura>, IFactura {} 

export const Factura = sequelize.define<IFacturaModel>('factura', {

    nro_factura:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    fecha:{
        type:DataTypes.DATE,
    },
    total_sin_iva:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
    iva:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
    total_con_iva:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    }
},{timestamps:false})

Factura.belongsTo(Cliente, {foreignKey:'nro_cliente'})
    
    
 //   DtFactura.belongsTo(Factura, {foreignKey:'nro_factura'})

