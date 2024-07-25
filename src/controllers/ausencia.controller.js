import {getConnection} from "../database/database"

const getAusencias= async (req, res)=>{
    try{
        const connection= await getConnection();
        const result = await connection.query("SELECT id_ausencia, fecha, hora_inicio, hora_fin, descripcion, estado, id_usuario FROM ausencias");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};

const getAusencia= async (req, res)=>{
    try{
        console.log(req.params)
        const  {id_ausencia} = req.params;
        const connection= await getConnection();
        const result = await connection.query("SELECT id_ausencia, fecha, hora_inicio, hora_fin,  descripcion, estado, id_usuario FROM ausencias WhERE id_ausencia = ?", id_ausencia);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};

const addAusencia= async (req, res) =>{
    try{
        const {fecha,hora_inicio,hora_fin,descripcion,estado, id_usuario}=req.body;

        if(fecha == undefined || hora_inicio == undefined || hora_fin == undefined || undefined || descripcion == undefined ||estado, id_usuario == undefined){
            res.status(400).json({message:"Bad request. Please fill all filed"});
        }
        const Ausencia={
            fecha,hora_inicio,hora_fin,descripcion,estado, id_usuario
        };
        
        const connection = await getConnection();
        await connection.query("INSERT INTO ausencias SET ?",Ausencia );
        res.json({message:"Language added"});
    }catch(error){
        res.status(500);
        res.send(error.message)

    }
};

const updateAusencia= async (req, res)=>{
    try{
        console.log(req.params)
        const  {id_ausencia} = req.params;
        const {fecha,hora_inicio,hora_fin,descripcion,estado, id_usuario}=req.body;
        if(fecha == undefined || hora_inicio == undefined || hora_fin == undefined || undefined || descripcion == undefined ||estado, id_usuario == undefined){
            res.status(400).json({message:"Bad request. Please fill all filed"});
        }
        const Ausencia={
            id_ausencia,fecha,hora_inicio,hora_fin,descripcion,estado, id_usuario
        };
        const connection= await getConnection();
        const result = await connection.query("UPDATE ausencias SET ? WhERE id_ausencia = ?", [Ausencia, id_ausencia]);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const deleteAusencia= async (req, res)=>{
    try{
        console.log(req.params)
        const  {id_ausencia} = req.params;
        const connection= await getConnection();
        const result = await connection.query("DELETE FROM ausencias WhERE id_ausencia = ?", id_ausencia);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};


export const methods ={
    getAusencias,
    getAusencia,
    addAusencia,
    updateAusencia,
    deleteAusencia
};