import express from "express";
import "dotenv/config";
// import path from "path";
import usuariosRoute from "./routes/usuariosRoute.js";
import transferenciasRoute from "./routes/transferenciasRoute.js";
import cors from "cors";
const { SERVER_PORT } = process.env;
// const __dirname = path.resolve();
const app = express();

app.use(express.json());
app.use(cors());
app.use(usuariosRoute);
app.use(transferenciasRoute);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port http://localhost:${SERVER_PORT}`);
});
