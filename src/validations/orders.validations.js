// Validaciones para POST y PUT
export const validateOrder = (req, res, next) => {
    const { Cliente, Fecha, Total, Estado } = req.body;

    if (!Cliente || !Fecha || !Total || !Estado) {
        return res.status(400).json({ message: "Solicitud incorrecta. Por favor, complete todos los campos." });
    }

    if (typeof Cliente !== 'string' || Cliente.trim().length === 0) {
        return res.status(400).json({ message: "Cliente inválido." });
    }

    // Validar formato de fecha (yyyy-mm-dd)
    const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!fechaRegex.test(Fecha)) {
        return res.status(400).json({ message: "Fecha inválida. Debe estar en formato yyyy-mm-dd." });
    }

    // Verificar si la fecha es válida
    const fechaValida = new Date(Fecha);
    if (isNaN(fechaValida.getTime())) {
        return res.status(400).json({ message: "Fecha inválida. No es una fecha real." });
    }

    if (typeof Total !== 'number' || Total <= 0) {
        return res.status(400).json({ message: "Total inválido. Debe ser un número mayor que 0." });
    }

    if (!['A', 'I'].includes(Estado)) {
        return res.status(400).json({ message: "El estado debe ser 'A' (activo) o 'I' (inactivo)." });
    }

    next();
};

// Validaciones para PUT y DELETE (por ID)
export const validateOrderId = (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: "ID de orden es requerido." });
    }

    if (isNaN(Number(id))) {
        return res.status(400).json({ message: "ID de orden inválido. Debe ser un número." });
    }

    next();
};
