import { transferenciasModel } from "../models/transferencias.js";
import { getDataBaseError } from "../lib/errors/databaseErrors.js";
const findAll = async (req, res) => {
  try {
    const result = await transferenciasModel.findAll();
    res.json(result);
  } catch (error) {
    if (error.code) {
      const { code, message } = getDataBaseError(error.code);
      return res.status(code).json({ message });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};

const create = async (req, res) => {
  try {
    const { emisor, receptor, monto } = req.body;
    if (!emisor || !receptor || !monto) {
      return res
        .status(400)
        .json({ message: "Todos los campos son requeridos" });
    }
    const newTransferencia = {
      emisor,
      receptor,
      monto,
    };
    const result = await transferenciasModel.create(newTransferencia);
    res.json({ message: "Transferencia realizada con exito", result });
  } catch (error) {
    if (error.code) {
      const { code, message } = getDataBaseError(error.code);
      return res.status(code).json({ message });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const transferenciasController = {
  findAll,
  create,
};
