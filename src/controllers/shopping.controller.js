import { getConnection } from "../database/database";

const getshopping = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, codigo, Fecha_compra, Fecha_registro, Precio_total, estado, Id_Proveedores FROM compras");
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor: " + error.message });
    }
};

const getshoppings = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, codigo, Fecha_compra, Fecha_registro, Precio_total, estado, Id_Proveedores FROM compras WHERE id = ?", id);
        if (result.length === 0) {
            res.status(404).json({ message: "Compra no encontrada" });
        } else {
            res.json(result);
        }
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor: " + error.message });
    }
};

const addshopping = async (req, res) => {
    try {
        const { codigo, Fecha_compra, Fecha_registro, Precio_total, estado, Id_Proveedores } = req.body;

        if (codigo === undefined || Fecha_compra === undefined || Fecha_registro === undefined || Precio_total === undefined || estado === undefined || Id_Proveedores === undefined) {
            res.status(400).json({ message: "Solicitud incorrecta. Por favor, complete todos los campos" });
            return;
        }

        const Compra = { codigo, Fecha_compra, Fecha_registro, Precio_total, estado, Id_Proveedores };
        const connection = await getConnection();
        await connection.query("INSERT INTO compras SET ?", Compra);
        res.json({ message: "Compra añadida con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor: " + error.message });
    }
};

const updateshopping = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const { codigo, Fecha_compra, Fecha_registro, Precio_total, estado, Id_Proveedores } = req.body;

        if (codigo === undefined || Fecha_compra === undefined || Fecha_registro === undefined || Precio_total === undefined || estado === undefined || Id_Proveedores === undefined) {
            res.status(400).json({ message: "Solicitud incorrecta. Por favor, complete todos los campos" });
            return;
        }

        const Compra = { id, codigo, Fecha_compra, Fecha_registro, Precio_total, estado, Id_Proveedores };
        const connection = await getConnection();
        const result = await connection.query("UPDATE compras SET ? WHERE id = ?", [Compra, id]);
        res.json({ message: "Compra actualizada con éxito", result });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor: " + error.message });
    }
};

const deleteshopping = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM compras WHERE id = ?", id);
        if (result.affectedRows === 0) {
            res.status(404).json({ message: "Compra no encontrada" });
        } else {
            res.json({ message: "Compra eliminada con éxito" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor: " + error.message });
    }
};

export const methods = {
    getshopping,
    getshoppings,
    addshopping,
    updateshopping,
    deleteshopping
};
