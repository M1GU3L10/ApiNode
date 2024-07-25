import {getConnection} from "../database/database"

const getCompras= async (req, res)=>{
    try{
        const connection= await getConnection();
        const result = await connection.query("SELECT id, codigo, Fecha_compra, Fecha_registro, Precio_total, estado, Id_Proveedores FROM compras");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};

const getCompra= async (req, res)=>{
    try{
        console.log(req.params)
        const  {id} = req.params;
        const connection= await getConnection();
        const result = await connection.query("SELECT id, codigo, Fecha_compra, Fecha_registro,  Precio_total, estado, Id_Proveedores FROM compras WhERE id = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};

const addCompra= async (req, res) =>{
    try{
        const {codigo,Fecha_compra,Fecha_registro,Precio_total,estado, Id_Proveedores}=req.body;

        if(codigo == undefined || Fecha_compra == undefined || Fecha_registro == undefined || estado == undefined ||Precio_total == undefined ||Id_Proveedores == undefined){
            res.status(400).json({message:"Bad request. Please fill all filed"});
        }
        const Compra={
            codigo,Fecha_compra,Fecha_registro,Precio_total,estado, Id_Proveedores
        };
        
        const connection = await getConnection();
        await connection.query("INSERT INTO compras SET ?",Compra );
        res.json({message:"Language added"});
    }catch(error){
        res.status(500);
        res.send(error.message)

    }
};

const updateCompra= async (req, res)=>{
    try{
        console.log(req.params)
        const  {id} = req.params;
        const {codigo,Fecha_compra,Fecha_registro,Precio_total,estado, Id_Proveedores}=req.body;
        if(codigo == undefined || Fecha_compra == undefined || Fecha_registro == undefined || undefined || Precio_total == undefined ||estado ==undefined || Id_Proveedores == undefined){
            res.status(400).json({message:"Bad request. Please fill all filed"});
        }
        const Compra={
            id,codigo,Fecha_compra,Fecha_registro,Precio_total,estado, Id_Proveedores
        };
        const connection= await getConnection();
        const result = await connection.query("UPDATE compras SET ? WhERE id = ?", [Compra, id]);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const deleteCompra= async (req, res)=>{
    try{
        console.log(req.params)
        const  {id} = req.params;
        const connection= await getConnection();
        const result = await connection.query("DELETE FROM compras WhERE id = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};


export const methods ={
    getCompras,
    getCompra,
    addCompra,
    updateCompra,
    deleteCompra
};