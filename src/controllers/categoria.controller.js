import {getConnection} from "../database/database"

const getCategorias= async (req, res)=>{
    try{
        const connection= await getConnection();
        const result = await connection.query("SELECT id, Nombre_categoria,estado FROM categoria_productos");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};

const getCategoria= async (req, res)=>{
    try{
        console.log(req.params)
        const  {id} = req.params;
        const connection= await getConnection();
        const result = await connection.query("SELECT id, Nombre_categoria,estado FROM categoria_productos WhERE id = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};

const addCategoria= async (req, res) =>{
    try{
        const {Nombre_categoria,estado}=req.body;

        if(Nombre_categoria == undefined || estado == undefined){
            res.status(400).json({message:"Bad request. Please fill all filed"});
        }
        const categoria={
            Nombre_categoria,estado
        };
        const connection = await getConnection();
        await connection.query("INSERT INTO categoria_productos SET ?",categoria );
        res.json({message:"Categoria agregada"});
    }catch(error){
        res.status(500);
        res.send(error.message)

    }
};

const updateCategoria= async (req, res)=>{
    try{
        console.log(req.params)
        const  {id} = req.params;
        const {Nombre_categoria,estado}=req.body;
        if(Nombre_categoria == undefined || estado == undefined){
            res.status(400).json({message:"Bad request. Please fill all filed"});
        }
        const Categoria={
            Nombre_categoria,estado
        };
        const connection= await getConnection();
        const result = await connection.query("UPDATE categoria_productos SET ? WhERE id = ?", [Categoria, id]);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const deleteCategoria= async (req, res)=>{
    try{
        console.log(req.params)
        const  {id} = req.params;
        const connection= await getConnection();
        const result = await connection.query("DELETE FROM categoria_productos WhERE id = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};


export const methods ={
    getCategorias,
    getCategoria,
    addCategoria,
    updateCategoria,
    deleteCategoria,
};