import { getConnection } from "../database/database";

const getProductos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, Nombre_producto, Precio, Estado FROM productos");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, Nombre_producto, Precio, Estado FROM productos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addProducto = async (req, res) => {
    try {
        const { Nombre_producto, Precio, Estado } = req.body;

        if (Nombre_producto == undefined || Precio == undefined || Estado == undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields." });
        }
        const producto = {
            Nombre_producto,
            Precio,
            Estado
        };
        const connection = await getConnection();
        await connection.query("INSERT INTO productos SET ?", producto);
        res.json({ message: "Producto agregado" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { Nombre_producto, Precio, Estado } = req.body;
        if (Nombre_producto == undefined || Precio == undefined || Estado == undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields." });
        }
        const producto = {
            Nombre_producto,
            Precio,
            Estado
        };
        const connection = await getConnection();
        const result = await connection.query("UPDATE productos SET ? WHERE id = ?", [producto, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM productos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getProductos,
    getProducto,
    addProducto,
    updateProducto,
    deleteProducto,
};
