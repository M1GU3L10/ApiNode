import {getConnection} from "../database/database"

const getServices= async (req, res)=>{
    try{
        const connection= await getConnection();
        const result = await connection.query("SELECT id, Nombre_servicio, Precio, Estado, Tiempo_estimado FROM servicios");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};

const getService= async (req, res)=>{
    try{
        console.log(req.params)
        const  {id} = req.params;
        const connection= await getConnection();
        const result = await connection.query("SELECT id, Nombre_servicio, Precio, Estado, Tiempo_estimado FROM servicios WhERE id = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};

const addService= async (req, res) =>{
    try{
        const {Nombre_servicio,Precio,Estado,Tiempo_estimado}=req.body;

        if(Nombre_servicio == undefined || Precio == undefined || Estado == undefined || Tiempo_estimado == undefined){
            res.status(400).json({message:"Bad request. Please fill all filed"});
        }
        const servicio={
            Nombre_servicio, Precio, Estado, Tiempo_estimado
        };
        
        const connection = await getConnection();
        await connection.query("INSERT INTO servicios SET ?",servicio );
        res.json({message:"Servicio agregado"});
    }catch(error){
        res.status(500);
        res.send(error.message)

    }
};

const updateService= async (req, res)=>{
    try{
        console.log(req.params)
        const  {id} = req.params;
        const {Nombre_servicio,Precio,Estado,Tiempo_estimado}=req.body;
        if(Nombre_servicio == undefined || Precio == undefined || Estado == undefined  || Tiempo_estimado == undefined){
            res.status(400).json({message:"Bad request. Please fill all filed"});
        }
        const Servicio={
            id,Nombre_servicio,Precio,Estado,Tiempo_estimado
        };
        const connection= await getConnection();
        const result = await connection.query("UPDATE servicios SET ? WhERE id = ?", [Servicio, id]);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const deleteService= async (req, res)=>{
    try{
        console.log(req.params)
        const  {id} = req.params;
        const connection= await getConnection();
        const result = await connection.query("DELETE FROM servicios WhERE id = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};


export const methods ={
    getServices,
    getService,
    addService,
    updateService,
    deleteService,
};