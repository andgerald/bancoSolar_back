import "dotenv/config";
import pool from "../database/dbConfig.js";

//transferencias GET: Devuelve todas las transferencias almacenadas en la base de datos en formato de arreglo.
const findAll = async () => {
  try {
    const result = await pool.query({
      rowMode: "array",
      text: "SELECT t.emisor,u.nombre,r.nombre,t.monto, t.fecha FROM transferencias t INNER JOIN usuarios u ON u.id = t.emisor INNER JOIN usuarios r ON r.id = t.receptor",
    });
    return result.rows;
  } catch (e) {
    return e;
  }
};

const create = async (transferencia) => {
  try {
    await pool.query("BEGIN");
    //encuentro al emisor
    const emisorQuery = await pool.query(
      "SELECT id FROM usuarios WHERE nombre = $1",
      [transferencia.emisor]
    );
    //encuentro al receptor
    const receptorQuery = await pool.query(
      "SELECT id FROM usuarios WHERE nombre = $1",
      [transferencia.receptor]
    );

    //saco los id
    const emisorId = emisorQuery.rows[0].id;
    const receptorId = receptorQuery.rows[0].id;

    // descontar del emisor y agregar al receptor
    const resta = await pool.query(
      "UPDATE usuarios SET balance = balance - $1 WHERE nombre = $2 RETURNING *",
      [transferencia.monto, transferencia.emisor]
    );
    resta.rows[0];
    // agregar al receptor el valor
    const suma = await pool.query(
      "UPDATE usuarios SET balance = balance + $1 WHERE nombre = $2 RETURNING *",
      [transferencia.monto, transferencia.receptor]
    );
    suma.rows[0];
    // se crea la transferencia
    const result = await pool.query(
      "INSERT INTO transferencias (emisor, receptor, monto, fecha) VALUES ($1, $2, $3, CURRENT_TIMESTAMP) RETURNING *",
      [emisorId, receptorId, transferencia.monto]
    );
    await pool.query("COMMIT");

    return result.rows[0];
  } catch (e) {
    await pool.query("ROLLBACK");
    console.error("Error en transacción, aplicando ROLLBACK:", e);
    throw e;
  }
};

export const transferenciasModel = {
  findAll,
  create,
};
