const databaseError = {
  "28P01": {
    code: 400,
    message: "Usuario o clave incorrectos: ",
  },
  "42P01": {
    code: 400,
    message: "No existe la tabla consultada ",
  },
  "3D000": {
    code: 400,
    message: "La base de datos no existe",
  },
  ENOTFOUND: {
    status: 500,
    message: "Error en valor usado como localhost",
  },
  ECONNREFUSED: {
    status: 500,
    message: "Error en el puerto de conexion ",
  },
  23502: {
    code: 400,
    message: "Falta ingresar parametros en la consulta",
  },
  42601: {
    code: 400,
    message: "Error en la consulta",
  },
};

export const getDataBaseError = (code) => {
  return databaseError[code] || { code: 500, message: "Internal server error" };
};
