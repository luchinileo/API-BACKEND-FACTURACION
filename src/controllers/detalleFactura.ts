import {Response,Request} from "express"
import { DtFactura } from '../models/detalleFactura';



export const getDetalleFactura = async (req: Request, res:Response )=>{

    try{
        const dtfacturas =await DtFactura.findAll();

        res.json(dtfacturas)
    }catch(error){
        console.log(error)
        res.json(error)
    }
}
export const getDetalleFacturaById =async(req: Request, res:Response )=>{

    console.log(req)
    const {id}= req.params
    try{
         const dtfactura = await DtFactura.findByPk(id)
         if(!dtfactura) {
            return res.status(400).json({mensaje:'No existe la factura'})
         }

         res.json({mensaje:'Se encontro la factura', dtfactura})
    }catch (error) {
       res.json(error)
    }
        

}

    export const crearDetalleFactura = async (req: Request, res: Response)=>{
        try{
              const dtfactura= await DtFactura.create(req.body)

              res.status(201).json(dtfactura)
          } catch (error){
              res.status(500).json(error)
        }
    }

     
       

