"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const database_1 = require("../db/database");
const sequelize_1 = require("sequelize");
//             modelo                     tabla
exports.Producto = database_1.sequelize.define('producto ', {
    codigo_producto: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    marca: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    precio: {
        type: sequelize_1.DataTypes.FLOAT,
        defaultValue: 1.0
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER,
    }
}, { timestamps: false });
//timestamps: nos dice cuando se creo
// y si alguin lo modifico  lo dejamos en falso asi no lo usamos
//# sourceMappingURL=producto%20copy.js.map