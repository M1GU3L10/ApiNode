import {getConnection} from "./../database/database"

const getCitas= async (req, res)=>{
    try{
        const connection= await getConnection();
        const result = await connection.query("SELECT id, hora_inicio, hora_fin, fecha, total, estado, cliente, empleado FROM citas");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};

const getCita= async (req, res)=>{
    try{
        console.log(req.params)
        const  {id} = req.params;
        const connection= await getConnection();
        const result = await connection.query("SELECT id, hora_inicio, hora_fin, fecha, total, estado, cliente, empleado FROM citas WHERE id = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};

const addCita= async (req, res) =>{
    try{
        const {hora_inicio,hora_fin,fecha,total,estado,cliente,empleado}=req.body;

        if(hora_inicio == undefined  || hora_fin== undefined  || fecha == undefined  || total == undefined  || estado == undefined  ||cliente == undefined  || empleado==undefined){
            res.status(400).json({message:"Bad request. Please fill all filed"});
        }
        const cita={
            hora_inicio,hora_fin,fecha,total,estado,cliente,empleado
        };
        
        const connection = await getConnection();
        await connection.query("INSERT INTO citas SET ?",cita );
        res.json({message:"Language added"});
    }catch(error){
        res.status(500);
        res.send(error.message)

    }
};

const updateCita= async (req, res)=>{
    try{
        console.log(req.params)
        const  {id} = req.params;
        const {hora_inicio,hora_fin,fecha,total,estado,cliente,empleado}=req.body;
        if(id == undefined || hora_inicio == undefined  || hora_fin== undefined  || fecha == undefined  || total == undefined  || estado == undefined  ||cliente == undefined  || empleado==undefined ){
            res.status(400).json({message:"Bad request. Please fill all filed"});
        }
        const cita={
            id,hora_inicio,hora_fin,fecha,total,estado,cliente,empleado
        };
        const connection= await getConnection();
        const result = await connection.query("UPDATE citas SET ? WHERE id = ?", [cita, id]);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};


const deleteCita= async (req, res)=>{
    try{
        console.log(req.params)
        const  {id} = req.params;
        const connection= await getConnection();
        const result = await connection.query("DELETE FROM citas WHERE id = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};



export const methods ={
    getCitas,
    addCita,
    getCita,
    deleteCita,
    updateCita
};