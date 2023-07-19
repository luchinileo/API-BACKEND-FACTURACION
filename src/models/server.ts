import express,{Application} from 'express'
import {sequelize} from '../db/database'
import clienteRoutes from '../routes/cliente'
import facturaRoutes from '../routes/factura'
import telefonoRoutes from '../routes/telefono'
import productoRoutes from '../routes/producto'
import detallefacturaRoutes from '../routes/detalleFactura'
import direccionRoutes from '../routes/direccion'




export class Server {
    private app:any
    private puerto:string | undefined
    private apiRutas={
        cliente : '/api/cliente',
        factura: '/api/factura',
        telefono: '/api/telefono',
        producto: '/api/producto',
        detalleFactura: '/api/detalle_factura',
        direccion: '/api/direccion',

    }

    constructor() {
        this.app= express()
        this.puerto= '4000'
        this.conectarBaseDeDatos()
        this.middlewares()
        this.routes()
    }
        // escucha continuamente lo que se cambia
    async conectarBaseDeDatos(){
        await sequelize.sync({force:false})
    }

    routes(){
        this.app.use(this.apiRutas.cliente,clienteRoutes)
        this.app.use(this.apiRutas.factura,facturaRoutes)
        this.app.use(this.apiRutas.telefono,telefonoRoutes)
        this.app.use(this.apiRutas.producto,productoRoutes)
        this.app.use(this.apiRutas.detalleFactura,detallefacturaRoutes)
        this.app.use(this.apiRutas.direccion,direccionRoutes)

    }
      //permite que cuando ejecutemos un post podamos enviar en el body json
    middlewares(){
        this.app.use(express.json())
    }



    listen(){
        this.app.listen(this.puerto,() =>{
            console.log(`la aplicacion esta corriendo ${this.puerto}`)
        })
    }

}
