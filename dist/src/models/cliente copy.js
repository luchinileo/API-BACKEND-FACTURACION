"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const database_1 = require("../db/database");
const sequelize_1 = require("sequelize");
exports.Cliente = database_1.sequelize.define('cliente', {
    nro_cliente: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    activo: {
        type: sequelize_1.DataTypes.TINYINT,
        defaultValue: 1,
    }
}, { timestamps: false });
//# sourceMappingURL=cliente%20copy.js.map