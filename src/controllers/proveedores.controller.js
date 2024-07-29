import { getConnection } from "../database/database";

const getProveedores = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, Nombre_proveedor, Contacto, Estado FROM proveedores");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getProveedor = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, Nombre_proveedor, Contacto, Estado FROM proveedores WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addProveedor = async (req, res) => {
    try {
        const { Nombre_proveedor, Contacto, Estado } = req.body;

        if (Nombre_proveedor == undefined || Contacto == undefined || Estado == undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields." });
        }
        const proveedor = {
            Nombre_proveedor,
            Contacto,
            Estado
        };
        const connection = await getConnection();
        await connection.query("INSERT INTO proveedores SET ?", proveedor);
        res.json({ message: "Proveedor agregado" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateProveedor = async (req, res) => {
    try {
        const { id } = req.params;
        const { Nombre_proveedor, Contacto, Estado } = req.body;
        if (Nombre_proveedor == undefined || Contacto == undefined || Estado == undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields." });
        }
        const proveedor = {
            Nombre_proveedor,
            Contacto,
            Estado
        };
        const connection = await getConnection();
        const result = await connection.query("UPDATE proveedores SET ? WHERE id = ?", [proveedor, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteProveedor = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM proveedores WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getProveedores,
    getProveedor,
    addProveedor,
    updateProveedor,
    deleteProveedor,
};
