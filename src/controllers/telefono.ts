import {Response,Request} from "express"
import { Telefono } from '../models/telefono';



export const getTelefonos = async (req: Request, res:Response )=>{

    try{
        const telefonos =await Telefono.findAll();

        res.json(telefonos)
    }catch(error){
        console.log(error)
        res.json(error)
    }
}
export const getTelefonoById =async(req: Request, res:Response )=>{

    console.log(req)
    const {id}= req.params
    try{
         const telefono = await Telefono.findByPk(id)
         if(!telefono) {
            return res.status(400).json({mensaje:'No existe el telefono'})
         }

         res.json({mensaje:'Se encontro el telefono', telefono})
    }catch (error) {
       res.json(error)
    }
        

}

    export const crearTelefono = async (req: Request, res: Response)=>{
        try{
              const telefono= await Telefono.create(req.body)

              res.status(201).json(telefono)
          } catch (error){
              res.status(500).json(error)
        }
    }

     
       

