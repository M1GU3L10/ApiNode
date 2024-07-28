import { getConnection } from "../database/database";

const getVentas = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, Numero_factura, Fecha_venta, hora_registro, Montototal, estado, Id_cliente FROM ventas");
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor: " + error.message });
    }
};

const getVenta = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, Numero_factura, Fecha_venta, hora_registro, Montototal, estado, Id_cliente FROM ventas WHERE id = ?", id);
        if (result.length === 0) {
            res.status(404).json({ message: "Venta no encontrada" });
        } else {
            res.json(result);
        }
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor: " + error.message });
    }
};

const addVenta = async (req, res) => {
    try {
        const { Numero_factura, Fecha_venta, hora_registro, Montototal, estado, Id_cliente } = req.body;

        if (Numero_factura === undefined || Fecha_venta === undefined || hora_registro === undefined || Montototal === undefined || estado === undefined || Id_cliente === undefined) {
            res.status(400).json({ message: "Solicitud incorrecta. Por favor, complete todos los campos" });
            return;
        }

        const Venta = { Numero_factura, Fecha_venta, hora_registro, Montototal, estado, Id_cliente };
        const connection = await getConnection();
        await connection.query("INSERT INTO ventas SET ?", Venta);
        res.json({ message: "Venta agregada con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor: " + error.message });
    }
};

const updateVenta = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const { Numero_factura, Fecha_venta, hora_registro, Montototal, estado, Id_cliente } = req.body;

        if (Numero_factura === undefined || Fecha_venta === undefined || hora_registro === undefined || Montototal === undefined || estado === undefined || Id_cliente === undefined) {
            res.status(400).json({ message: "Solicitud incorrecta. Por favor, complete todos los campos" });
            return;
        }

        const Venta = { id, Numero_factura, Fecha_venta, hora_registro, Montototal, estado, Id_cliente };
        const connection = await getConnection();
        const result = await connection.query("UPDATE ventas SET ? WHERE id = ?", [Venta, id]);
        res.json({ message: "Venta modificada con éxito", result });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor: " + error.message });
    }
};

const deleteVenta = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM ventas WHERE id = ?", id);
        if (result.affectedRows === 0) {
            res.status(404).json({ message: "Venta no encontrada" });
        } else {
            res.json({ message: "Venta eliminada con éxito" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor: " + error.message });
    }
};

export const methods = {
    getVentas,
    getVenta,
    addVenta,
    updateVenta,
    deleteVenta
};
