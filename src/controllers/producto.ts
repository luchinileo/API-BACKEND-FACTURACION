import {Response,Request} from "express"
import { Producto } from '../models/producto';


//selec * from productos
export const getProductos = async (req: Request, res:Response )=>{
            //findAll();devuelbe todos los productos que encuentra dentro de Producto
            //usamos vasync =awai por que todas las bases de datos
            //tenemos quew esperar un tiempo
    try{                          
        const productos =await Producto.findAll();

        res.json({productos})
    }catch(error){
        console.log(error)
        res.json(error)
    }
}

// select * from producto where nro_producto=1
export const getProductoById =async(req: Request, res:Response )=>{

    console.log(req)
    const {id}= req.params
    try{
         const producto = await Producto.findByPk(id)
         if(!producto) {
            return res.status(400).json({mensaje:'No existe el poducto'})
         }

         res.json({mensaje:'Se encontro el producto', producto})
    }catch (error) {
       res.json(error)
    }
}
//insert into producto (columnas)values (filas)
export const crearProducto = async (req: Request, res: Response)=>{

    try{
          const producto = await Producto.create(req.body)
                             //devuelve un array con las llaves{}  
          res.status(201).json({producto})
      } catch (error){
          res.status(500).json(error)
 }
 }
 export const deleteProductoById =async(req: Request, res:Response )=>{

    console.log(req)
    const {id}= req.params
    try{
        Producto.destroy({where:{codigo_producto:id}})
        

         res.status(200).json({mensaje:`Se elimino el producto con el id ${id} `})
    }catch (error: any) {
       res.status(500).json({msg:error.message})
    }
}
        


     
       

