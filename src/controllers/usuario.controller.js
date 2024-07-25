import {getConnection} from "./../database/database"

const getUsuarios= async (req, res)=>{
    try{
        const connection= await getConnection();
        const result = await connection.query("SELECT id, Nombre_usuario, Correo, Contraseña, Telefono, estado, Id_rol FROM usuarios");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};

const getUsuario= async (req, res)=>{
    try{
        console.log(req.params)
        const  {id} = req.params;
        const connection= await getConnection();
        const result = await connection.query("SELECT id, Nombre_usuario, Correo, Contraseña, Telefono, estado, Id_rol FROM usuarios WHERE id = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};

const addUsuario= async (req, res) =>{
    try{
        const {Nombre_usuario,Correo,Contraseña,Telefono,estado,Id_rol}=req.body;

        if(Nombre_usuario == undefined || Correo == undefined || Contraseña == undefined ||Telefono == undefined || estado == undefined ||Id_rol == undefined){
            res.status(400).json({message:"Bad request. Please fill all filed"});
        }
        const usuario={
            Nombre_usuario,Correo,Contraseña,Telefono,estado,Id_rol
        };
        
        const connection = await getConnection();
        await connection.query("INSERT INTO usuarios SET ?",usuario );
        res.json({message:"Language added"});
    }catch(error){
        res.status(500);
        res.send(error.message)

    }
};

const updateUsuario= async (req, res)=>{
    try{
        console.log(req.params)
        const  {id} = req.params;
        const {Nombre_usuario,Correo,Contraseña,Telefono,estado,Id_rol}=req.body;
        if(Nombre_usuario == undefined || Correo == undefined || Contraseña == undefined ||Telefono == undefined || estado == undefined ||Id_rol == undefined){
            res.status(400).json({message:"Bad request. Please fill all filed"});
        }
        const usuario={
            id,Nombre_usuario,Correo,Contraseña,Telefono,estado,Id_rol
        };
        const connection= await getConnection();
        const result = await connection.query("UPDATE usuarios SET ? WHERE id = ?", [usuario, id]);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const deleteUsuario= async (req, res)=>{
    try{
        console.log(req.params)
        const  {id} = req.params;
        const connection= await getConnection();
        const result = await connection.query("DELETE FROM usuarios WHERE id = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};


export const methods ={
    getUsuarios,
    getUsuario,
    addUsuario,
    updateUsuario,
    deleteUsuario
};