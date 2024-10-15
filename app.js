const express = require("express");
const path = require('path');
const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));

app.listen(PORT, () => console.log('Servidor corriendo en http://localhost:' + PORT));
