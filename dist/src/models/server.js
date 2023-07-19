"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const database_1 = require("../db/database");
const cliente_1 = __importDefault(require("../routes/cliente"));
const factura_1 = __importDefault(require("../routes/factura"));
const telefono_1 = __importDefault(require("../routes/telefono"));
const producto_1 = __importDefault(require("../routes/producto"));
const detalleFactura_1 = __importDefault(require("../routes/detalleFactura"));
const direccion_1 = __importDefault(require("../routes/direccion"));
class Server {
    constructor() {
        this.apiRutas = {
            cliente: '/api/cliente',
            factura: '/api/factura',
            telefono: '/api/telefono',
            producto: '/api/producto',
            detalleFactura: '/api/detalle_factura',
            direccion: '/api/direccion',
        };
        this.app = (0, express_1.default)();
        this.puerto = '4000';
        this.conectarBaseDeDatos();
        this.middlewares();
        this.routes();
    }
    // escucha continuamente lo que se cambia
    conectarBaseDeDatos() {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.sequelize.sync({ force: false });
        });
    }
    routes() {
        this.app.use(this.apiRutas.cliente, cliente_1.default);
        this.app.use(this.apiRutas.factura, factura_1.default);
        this.app.use(this.apiRutas.telefono, telefono_1.default);
        this.app.use(this.apiRutas.producto, producto_1.default);
        this.app.use(this.apiRutas.detalleFactura, detalleFactura_1.default);
        this.app.use(this.apiRutas.direccion, direccion_1.default);
    }
    //permite que cuando ejecutemos un post podamos enviar en el body json
    middlewares() {
        this.app.use(express_1.default.json());
    }
    listen() {
        this.app.listen(this.puerto, () => {
            console.log(`la aplicacion esta corriendo ${this.puerto}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map