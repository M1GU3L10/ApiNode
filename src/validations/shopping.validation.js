// post y put
export const validateshopping = (req, res, next) => {
    const { codigo, Fecha_compra, Fecha_registro, Precio_total,
estado, Id_Proveedores } = req.body;

    if (!codigo || !Fecha_compra || !Fecha_registro || !Precio_total
|| !estado || !Id_Proveedores) {
        return res.status(400).json({ message: "Solicitud incorrecta. Por favor, complete todos los campos" });
    }
    if ( Fecha_compra ) {
        return res.status(400).json({ message: "Solicitud incorrecta."});
    }
    if (Precio_total){
        return res.status(400).json({ message: "Solicitud incorrecta. Solo se permiten numeros"});
    }
    next();
};


// put y delete
export const validateId = (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: "ID de compra es requerido" });
    }

    next();
};
