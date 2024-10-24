const express = require("express");
const path = require("path");
const PORT = 3030;

const app = express();

app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "home.html"))
);
app.get("/admin", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "admin.html"))
);
app.get("/perfil", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "perfUsuario.html"))
);

app.get('/login', (req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/recuperar', (req,res) => res.sendFile(path.join(__dirname, 'views', 'recuperar.html')));
app.get('/registro', (req,res) => res.sendFile(path.join(__dirname, 'views', 'registro.html')));


app.listen(PORT, () =>
  console.log("Servidor corriendo en http://localhost:" + PORT)
);

