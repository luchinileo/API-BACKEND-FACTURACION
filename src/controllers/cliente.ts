import {Response,Request} from "express"
import { Cliente } from '../models/cliente';



export const getCliente = async (req: Request, res:Response )=>{

    try{
        const clientes =await Cliente.findAll();

        res.json(clientes)
    }catch(error){
        console.log(error)
        res.json(error)
    }
}
export const getClienteById =async(req: Request, res:Response )=>{

    console.log(req)
    const {id}= req.params
    try{
         const cliente = await Cliente.findByPk(id)
         if(!cliente) {
            return res.status(400).json({mensaje:'No existe el cliente'})
         }

         res.json({mensaje:'Se encontro el cliente', cliente})
    }catch (error) {
       res.json(error)
    }
        

}

    export const crearCliente = async (req: Request, res: Response)=>{

     
       
        try{
              const cliente = await Cliente.create(req.body)

              res.status(201).json(cliente)
          } catch (error){
              res.status(500).json(error)
     }
     }

