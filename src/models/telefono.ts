import { sequelize } from "../db/database";
import {  DataTypes, Model } from "sequelize";
import { Cliente } from "./cliente";

interface ITelefono {
    nro_telefono:number,
    codigo_area:Date,
    tipo:string,
    nro_cliente?:number
} 



interface ITelefonoModel extends Model<ITelefono>, ITelefono {} 

export const Telefono = sequelize.define<ITelefonoModel>('telefono', {

    nro_telefono:{
        type:DataTypes.INTEGER,
        primaryKey:true,
    },
    codigo_area :{
        type:DataTypes.INTEGER,
        primaryKey:true   
    },
    tipo: {
        type:DataTypes.CHAR,
        defaultValue:'f'
    },
},{timestamps:false})

Telefono.belongsTo(Cliente, {foreignKey:'nro_cliente'})

//telefono va apertenecer a un cliente   se va relacionar con neo_cliente
    
    
    

