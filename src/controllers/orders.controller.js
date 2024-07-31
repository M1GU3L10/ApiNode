import { getConnection } from "../database/database";

const getOrders = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, Cliente, Fecha, Total, Estado FROM orders");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, Cliente, Fecha, Total, Estado FROM orders WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addOrder = async (req, res) => {
    try {
        const { Cliente, Fecha, Total, Estado } = req.body;

        if (Cliente == undefined || Fecha == undefined || Total == undefined || Estado == undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields." });
        }
        const order = {
            Cliente,
            Fecha,
            Total,
            Estado
        };
        const connection = await getConnection();
        await connection.query("INSERT INTO orders SET ?", order);
        res.json({ message: "Pedido agregado" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { Cliente, Fecha, Total, Estado } = req.body;
        if (Cliente == undefined || Fecha == undefined || Total == undefined || Estado == undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields." });
        }
        const order = {
            Cliente,
            Fecha,
            Total,
            Estado
        };
        const connection = await getConnection();
        const result = await connection.query("UPDATE orders SET ? WHERE id = ?", [order, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM orders WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getOrders,
    getOrder,
    addOrder,
    updateOrder,
    deleteOrder,
};
