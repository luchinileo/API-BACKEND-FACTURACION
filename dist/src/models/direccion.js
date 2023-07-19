"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
const database_1 = require("../db/database");
const sequelize_1 = require("sequelize");
const cliente_1 = require("./cliente");
exports.Direccion = database_1.sequelize.define('direccion', {
    nro_casa: {
        type: sequelize_1.DataTypes.INTEGER,
        //allowNull:false,
        primaryKey: true,
    },
    localidad: {
        type: sequelize_1.DataTypes.STRING,
        //allowNull:false,
        primaryKey: true,
    },
    calle: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    codigo_postal: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    nro_cliente: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
    }
}, { timestamps: false });
exports.Direccion.belongsTo(cliente_1.Cliente, { foreignKey: 'nro_cliente' });
//# sourceMappingURL=direccion.js.map