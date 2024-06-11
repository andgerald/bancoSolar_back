import { usuariosModel } from "../models/usuarios.js";
import { getDataBaseError } from "../lib/errors/databaseErrors.js";

const findAll = async (req, res) => {
  try {
    const result = await usuariosModel.findAll();
    return res.json(result);
  } catch (error) {
    if (error.code) {
      const { code, message } = getDataBaseError(error.code);
      return res.status(code).json({ message });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};

const create = async (req, res) => {
  const { nombre, balance } = req.body;
  if (!nombre || !balance) {
    return res
      .status(400)
      .json({ message: "El nombre y el balance son requeridos" });
  }
  const newUsuario = {
    nombre,
    balance,
  };
  try {
    const result = await usuariosModel.create(newUsuario);
    res.json({
      message: "Usuario creado con exito",
      result,
    });
  } catch (error) {
    if (error.code) {
      const { code, message } = getDataBaseError(error.code);
      return res.status(code).json({ message });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};

const remove = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ message: "El id es requerido" });
  }
  try {
    const result = await usuariosModel.remove(id);
    res.json({ message: "Usuario eliminado con exito", result });
  } catch (error) {
    if (error.code) {
      const { code, message } = getDataBaseError(error.code);
      return res.status(code).json({ message });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};

const update = async (req, res) => {
  const { nombre, balance } = req.body;
  const { id } = req.query;
  if (!id || !nombre || !balance) {
    return res.status(400).json({ message: "Todos los datos son requeridos" });
  }
  try {
    const result = await usuariosModel.update(nombre, balance, id);
    res.json({ message: "Usuario actulizado con exito", result });
  } catch (error) {
    if (error.code) {
      const { code, message } = getDataBaseError(error.code);
      res.status(code).json({ message });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};

export const usuariosController = {
  findAll,
  create,
  remove,
  update,
};
