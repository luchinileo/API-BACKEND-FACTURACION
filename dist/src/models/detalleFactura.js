"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFactura = void 0;
const database_1 = require("../db/database");
const sequelize_1 = require("sequelize");
const factura_1 = require("./factura");
const producto_1 = require("./producto");
//             modelo                     tabla
exports.DtFactura = database_1.sequelize.define('detalleFactura ', {
    nro_factura: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nro_item: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    cantidad: {
        type: sequelize_1.DataTypes.FLOAT,
        defaultValue: 1.0
    },
    codigo_producto: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    }
}, { timestamps: false });
exports.DtFactura.belongsTo(factura_1.Factura, { foreignKey: 'nro_factura' });
exports.DtFactura.belongsTo(producto_1.Producto, { foreignKey: 'nro_producto' });
//# sourceMappingURL=detalleFactura.js.map