// Validations for POST and PUT
export const validateSupplier = (req, res, next) => {
    const { Name, Contact, Status } = req.body;

    if (!Name || !Contact || !Status) {
        return res.status(400).json({ message: "Bad request. Please fill all fields." });
    }

    if (typeof Name !== 'string' || Name.trim().length === 0) {
        return res.status(400).json({ message: "Invalid name. It must be a non-empty string." });
    }

    if (typeof Contact !== 'string' || Contact.trim().length === 0) {
        return res.status(400).json({ message: "Invalid contact. It must be a non-empty string." });
    }

    if (!['A', 'I'].includes(Status)) {
        return res.status(400).json({ message: "Invalid status. It must be 'A' (active) or 'I' (inactive)." });
    }

    next();
};

// Validations for PUT and DELETE (by ID)
export const validateSupplierId = (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: "Supplier ID is required." });
    }

    if (isNaN(Number(id))) {
        return res.status(400).json({ message: "Invalid supplier ID. It must be a number." });
    }

    next();
};
