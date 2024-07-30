
// post y put
export const validateBuy = (req, res, next) => {
    const { codigo, Fecha_compra, Fecha_registro, Precio_total, estado, Id_Proveedores } = req.body;

    if (!codigo || !Fecha_compra || !Fecha_registro || !Precio_total || !estado || !Id_Proveedores) {
        return res.status(400).json({ message: "Solicitud incorrecta. Por favor, complete todos los campos" });
    }

    next();
};

// busca id para el put
export const validateId = (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: "ID de compra es requerido" });
    }

    next();
};
