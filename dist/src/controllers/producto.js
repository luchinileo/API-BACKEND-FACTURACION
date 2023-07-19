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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductoById = exports.crearProducto = exports.getProductoById = exports.getProductos = void 0;
const producto_1 = require("../models/producto");
//selec * from productos
const getProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //findAll();devuelbe todos los productos que encuentra dentro de Producto
    //usamos vasync =awai por que todas las bases de datos
    //tenemos quew esperar un tiempo
    try {
        const productos = yield producto_1.Producto.findAll();
        res.json({ productos });
    }
    catch (error) {
        console.log(error);
        res.json(error);
    }
});
exports.getProductos = getProductos;
// select * from producto where nro_producto=1
const getProductoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    const { id } = req.params;
    try {
        const producto = yield producto_1.Producto.findByPk(id);
        if (!producto) {
            return res.status(400).json({ mensaje: 'No existe el poducto' });
        }
        res.json({ mensaje: 'Se encontro el producto', producto });
    }
    catch (error) {
        res.json(error);
    }
});
exports.getProductoById = getProductoById;
//insert into producto (columnas)values (filas)
const crearProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const producto = yield producto_1.Producto.create(req.body);
        //devuelve un array con las llaves{}  
        res.status(201).json({ producto });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.crearProducto = crearProducto;
const deleteProductoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    const { id } = req.params;
    try {
        producto_1.Producto.destroy({ where: { codigo_producto: id } });
        res.status(200).json({ mensaje: `Se elimino el producto con el id ${id} ` });
    }
    catch (error) {
        res.status(500).json({ msg: error.message });
    }
});
exports.deleteProductoById = deleteProductoById;
//# sourceMappingURL=producto.js.map