import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json()); //TODO para recibir datos en json en el body 
app.use(router);
db().then(() => console.log('Conexión Ready'));

app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));