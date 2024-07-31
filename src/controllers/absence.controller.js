import { getConnection } from "../database/database";

const getAbsences = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_ausencia, fecha, hora_inicio, hora_fin, descripcion, estado, id_usuario FROM ausencias");
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor: " + error.message });
    }
};

const getAbsence = async (req, res) => {
    try {
        console.log(req.params);
        const { id_ausencia } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id_ausencia, fecha, hora_inicio, hora_fin, descripcion, estado, id_usuario FROM ausencias WHERE id_ausencia = ?", id_ausencia);
        if (result.length === 0) {
            res.status(404).json({ message: "Ausencia no encontrada" });
        } else {
            res.json(result);
        }
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor: " + error.message });
    }
};

const addAbsences = async (req, res) => {
    try {
        const { fecha, hora_inicio, hora_fin, descripcion, estado, id_usuario } = req.body;

        if (fecha === undefined || hora_inicio === undefined || hora_fin === undefined || descripcion === undefined || estado === undefined || id_usuario === undefined) {
            res.status(400).json({ message: "Solicitud incorrecta. Por favor, complete todos los campos" });
            return;
        }

        const Ausencia = { fecha, hora_inicio, hora_fin, descripcion, estado, id_usuario };
        const connection = await getConnection();
        await connection.query("INSERT INTO ausencias SET ?", Ausencia);
        res.json({ message: "Ausencia añadida con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor: " + error.message });
    }
};

const updateAbsences = async (req, res) => {
    try {
        console.log(req.params);
        const { id_ausencia } = req.params;
        const { fecha, hora_inicio, hora_fin, descripcion, estado, id_usuario } = req.body;

        if (fecha === undefined || hora_inicio === undefined || hora_fin === undefined || descripcion === undefined || estado === undefined || id_usuario === undefined) {
            res.status(400).json({ message: "Solicitud incorrecta. Por favor, complete todos los campos" });
            return;
        }

        const Ausencia = { id_ausencia, fecha, hora_inicio, hora_fin, descripcion, estado, id_usuario };
        const connection = await getConnection();
        const result = await connection.query("UPDATE ausencias SET ? WHERE id_ausencia = ?", [Ausencia, id_ausencia]);
        res.json({ message: "Ausencia actualizada con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor: " + error.message });
    }
};

const deleteAbsences = async (req, res) => {
    try {
        console.log(req.params);
        const { id_ausencia } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM ausencias WHERE id_ausencia = ?", id_ausencia);
        if (result.affectedRows === 0) {
            res.status(404).json({ message: "Ausencia no encontrada" });
        } else {
            res.json({ message: "Ausencia eliminada con éxito" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor: " + error.message });
    }
};

export const methods = {
    getAbsences,
    getAbsence,
    addAbsences,
    updateAbsences,
    deleteAbsences
};
