import { getConnection } from "../database/database";

const getPedidos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, Cliente, Fecha, Total, Estado FROM pedidos");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, Cliente, Fecha, Total, Estado FROM pedidos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addPedido = async (req, res) => {
    try {
        const { Cliente, Fecha, Total, Estado } = req.body;

        if (Cliente == undefined || Fecha == undefined || Total == undefined || Estado == undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields." });
        }
        const pedido = {
            Cliente,
            Fecha,
            Total,
            Estado
        };
        const connection = await getConnection();
        await connection.query("INSERT INTO pedidos SET ?", pedido);
        res.json({ message: "Pedido agregado" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updatePedido = async (req, res) => {
    try {
        const { id } = req.params;
        const { Cliente, Fecha, Total, Estado } = req.body;
        if (Cliente == undefined || Fecha == undefined || Total == undefined || Estado == undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields." });
        }
        const pedido = {
            Cliente,
            Fecha,
            Total,
            Estado
        };
        const connection = await getConnection();
        const result = await connection.query("UPDATE pedidos SET ? WHERE id = ?", [pedido, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deletePedido = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM pedidos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getPedidos,
    getPedido,
    addPedido,
    updatePedido,
    deletePedido,
};
