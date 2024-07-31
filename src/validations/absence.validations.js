//post y put
export const validateAbsence = (req, res, next) => {
    const { fecha, hora_inicio, hora_fin, descripcion, estado, id_usuario } = req.body;

    if (!fecha || !hora_inicio || !hora_fin || !descripcion || !estado|| !id_usuario) {
        return res.status(400).json({ message: "Solicitud incorrecta. Por favor, complete todos los campos." });
    }

    if (!/^(\d{4}-\d{2}-\d{2})$/.test(fecha)) {
        return res.status(400).json({ message: "Fecha inválida. Debe estar en formato YYYY-MM-DD." });
    }

    if (!/^([01]\d|2[0-3]):([0-5]\d)$/.test(hora_inicio) ||!/^([01]\d|2[0-3]):([0-5]\d)$/.test(hora_fin)) {
        return res.status(400).json({ message: "Hora inválida. Debe estar en formato HH:MM." });
    }

    if (hora_inicio >= hora_fin) {
        return res.status(400).json({ message: "Solicitud incorrecta.La hora de fin debe ser mayor que la hora de inicio." });
    }

    next();
};


//put y delete
export const validateId = (req, res, next) => {
    const { id_ausencia } = req.params;

    if (!id_ausencia) {
        return res.status(400).json({ message: "ID de ausencia es requerido" });
    }

    next();
};
    