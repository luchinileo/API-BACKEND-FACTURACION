"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factura = void 0;
const database_1 = require("../db/database");
const sequelize_1 = require("sequelize");
const cliente_1 = require("./cliente");
exports.Factura = database_1.sequelize.define('factura', {
    nro_factura: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE,
    },
    total_sin_iva: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    iva: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    total_con_iva: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    }
}, { timestamps: false });
exports.Factura.belongsTo(cliente_1.Cliente, { foreignKey: 'nro_cliente' });
//   DtFactura.belongsTo(Factura, {foreignKey:'nro_factura'})
//# sourceMappingURL=factura.js.map