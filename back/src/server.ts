import express from "express";
import cors from "cors";
import router from "./routers/routers";
import session from "express-session";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: "123asd123", // cambia esto en producción
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // false , true si solo usas HTTPS
    httpOnly: true,
    maxAge: 1000 * 60 * 30 // 30 minutos
  }
}));



app.use(session)
// Rutas
app.use(router);

// Levantar servidor
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ Servidor activo en http://localhost:${PORT}`);
});
