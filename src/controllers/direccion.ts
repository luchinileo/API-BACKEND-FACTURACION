import {Response,Request} from "express"
import { Direccion } from '../models/direccion';



export const getDireccion = async (req: Request, res:Response )=>{

    try{
        const direccion =await Direccion.findAll();

        res.json(direccion)
    }catch(error){
        console.log(error)
        res.json(error)
    }
}
export const getDireccionById =async(req: Request, res:Response )=>{

    console.log(req)
    const {id}= req.params
    try{
         const direccion = await Direccion.findByPk(id)
         if(!direccion) {
            return res.status(400).json({mensaje:'No existe la direccion'})
         }

         res.json({mensaje:'Se encontro la direccion', direccion})
    }catch (error) {
       res.json(error)
    }
        

}

    export const crearDireccion= async (req: Request, res: Response)=>{

     
       
        try{
              const direccion = await Direccion.create(req.body)

              res.status(201).json(direccion)
          } catch (error){
              res.status(500).json(error)
     }
     }

