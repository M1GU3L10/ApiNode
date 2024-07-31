// Validaciones para POST y PUT
export const validateProduct = (req, res, next) => {
    const { Nombre_producto, Precio, Estado, Imagen } = req.body;

    if (!Nombre_producto || !Precio || !Estado || !Imagen) {
        return res.status(400).json({ message: "Solicitud incorrecta. Por favor, complete todos los campos." });
    }

    if (typeof Nombre_producto !== 'string' || Nombre_producto.trim().length === 0) {
        return res.status(400).json({ message: "Nombre de producto inválido." });
    }

    if (typeof Precio !== 'number' || Precio <= 0) {
        return res.status(400).json({ message: "Precio inválido. Debe ser un número mayor que 0." });
    }

    if (!['A', 'I'].includes(Estado)) {
        return res.status(400).json({ message: "El estado debe ser 'A' (activo) o 'I' (inactivo)." });
    }

    if (typeof Imagen !== 'string' || Imagen.trim().length === 0) {
        return res.status(400).json({ message: "Imagen inválida. Debe ser una URL o un path válido." });
    }

    next();
};

// Validaciones para PUT y DELETE (por ID)
export const validateProductId = (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: "ID de producto es requerido." });
    }

    if (isNaN(Number(id))) {
        return res.status(400).json({ message: "ID de producto inválido. Debe ser un número." });
    }

    next();
};
