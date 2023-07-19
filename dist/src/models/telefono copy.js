"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
const database_1 = require("../db/database");
const sequelize_1 = require("sequelize");
const cliente_1 = require("./cliente");
exports.Telefono = database_1.sequelize.define('telefono', {
    nro_telefono: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    codigo_area: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    tipo: {
        type: sequelize_1.DataTypes.CHAR,
        defaultValue: 'f'
    },
}, { timestamps: false });
exports.Telefono.belongsTo(cliente_1.Cliente, { foreignKey: 'nro_cliente' });
//telefono va apertenecer a un cliente   se va relacionar con neo_cliente
//# sourceMappingURL=telefono%20copy.js.map