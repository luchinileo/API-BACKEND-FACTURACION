import {Response,Request} from "express"
import { Factura } from '../models/factura';
import { Cliente } from '../models/cliente';



export const getFactura = async (req: Request, res:Response )=>{

    try{
        const facturas =await Factura.findAll();

        

        res.json(facturas)
    }catch(error){
        console.log(error)
        res.json(error)
    }
}
export const getFacturaById =async(req: Request, res:Response )=>{

    console.log(req)
    const {id}= req.params
    try{
         const factura = await Factura.findByPk(id)
         if(!factura) {
            return res.status(400).json({mensaje:'No existe la factura'})
         }
         const cliente = await Cliente.findByPk(factura?.nro_cliente) 
         res.json({mensaje:'Se encontro la factura', factura, cliente})
    }catch (error) {
       res.json(error)
    }
        

}

    export const crearFactura= async (req: Request, res: Response)=>{

        try{
              const factura = await Factura.create(req.body)

              res.status(201).json(factura)
          } catch (error){
              res.status(500).json(error)
     }
     }
     
       

