// post y put
export const validateProgramming_employee = (req, res, next) => {
    const { Id_usuario, Hora_inicio, Hora_fin, estado, dia } = req.body;

    if ( !Id_usuario|| !Hora_inicio || !Hora_fin || !estado || !dia) {
        return res.status(400).json({ message: "Solicitud incorrecta. Por favor, complete todos los campos" });
    }

    if (!/^([01]\d|2[0-3]):([0-5]\d)$/.test(Hora_inicio) ||!/^([01]\d|2[0-3]):([0-5]\d)$/.test(Hora_fin)) {
        return res.status(400).json({ message: "Hora inválida. Debe estar en formato HH:MM." });
    }

    if (Hora_inicio>=Hora_fin) {
        return res.status(400).json({ message: "La hora de fin no puede ser anterior a la hora de inicio" });
    }

    if (!['A', 'I'].includes(estado)) {
        return res.status(400).json({ message: "El estado debe ser 'A' (activo) o 'I' (inactivo)" });
    }

    next();
};


// put y delete
export const validateId = (req, res, next) => {
    const { Id_programacion } = req.params;

    if (!Id_programacion) {
        return res.status(400).json({ message: "Id de programación es requerido" });
    }

    next();
};

