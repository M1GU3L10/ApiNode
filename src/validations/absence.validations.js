//post y put
export const validateAbsence = (req, res, next) => {
    const { fecha, hora_inicio, hora_fin, descripcion, estado, id_usuario } = req.body;

    if (!fecha || !hora_inicio || !hora_fin || !descripcion || !estado || !id_usuario) {
        return res.status(400).json({ message: "Solicitud incorrecta. Por favor, complete todos los campos" });
    }

    next();
};

//encontrar el id para hacer el put
export const validateId = (req, res, next) => {
    const { id_ausencia } = req.params;

    if (!id_ausencia) {
        return res.status(400).json({ message: "ID de ausencia es requerido" });
    }

    next();
};
