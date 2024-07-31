import { getConnection } from "../database/database";

const getSuppliers = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, Nombre_proveedor, Contacto, Estado FROM suppliers");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getSupplier = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, Nombre_proveedor, Contacto, Estado FROM suppliers WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addSupplier = async (req, res) => {
    try {
        const { Nombre_proveedor, Contacto, Estado } = req.body;

        if (Nombre_proveedor == undefined || Contacto == undefined || Estado == undefined) {
            res.status(400).json({ message: "Solicitud incorrecta. Por favor, complete todos los campos." });
        }
        const supplier = {
            Nombre_proveedor,
            Contacto,
            Estado
        };
        const connection = await getConnection();
        await connection.query("INSERT INTO suppliers SET ?", supplier);
        res.json({ message: "Proveedor agregado" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateSupplier = async (req, res) => {
    try {
        const { id } = req.params;
        const { Nombre_proveedor, Contacto, Estado } = req.body;
        if (Nombre_proveedor == undefined || Contacto == undefined || Estado == undefined) {
            res.status(400).json({ message: "Solicitud incorrecta. Por favor, complete todos los campos." });
        }
        const supplier = {
            Nombre_proveedor,
            Contacto,
            Estado
        };
        const connection = await getConnection();
        const result = await connection.query("UPDATE suppliers SET ? WHERE id = ?", [supplier, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteSupplier = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM suppliers WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getSuppliers,
    getSupplier,
    addSupplier,
    updateSupplier,
    deleteSupplier,
};
