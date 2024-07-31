import { getConnection } from "../database/database";

const getProducts = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, Nombre_producto, Precio, Estado FROM products");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, Nombre_producto, Precio, Estado FROM products WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addProduct = async (req, res) => {
    try {
        const { Nombre_producto, Precio, Estado } = req.body;

        if (Nombre_producto == undefined || Precio == undefined || Estado == undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields." });
        }
        const product = {
            Nombre_producto,
            Precio,
            Estado
        };
        const connection = await getConnection();
        await connection.query("INSERT INTO products SET ?", product);
        res.json({ message: "Producto agregado" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { Nombre_producto, Precio, Estado } = req.body;
        if (Nombre_producto == undefined || Precio == undefined || Estado == undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields." });
        }
        const product = {
            Nombre_producto,
            Precio,
            Estado
        };
        const connection = await getConnection();
        const result = await connection.query("UPDATE products SET ? WHERE id = ?", [product, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM products WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
};
