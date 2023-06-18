const express = require('express');
const app = express();
const puerto = 3000;
const fs = require('fs');
app.enable('trust proxy');


app.use(express.static('public'));
app.use(express.static('images'));
// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/inicio.html');
});
app.get('/CATALOGO.HTML', (req, res) => {
  res.sendFile(__dirname + '/public/CATALOGO.HTML');
});
app.get('/inicio.html', (req, res) => {
  res.sendFile(__dirname + '/public/inicio.html');
});  
// Iniciar el servidor
app.listen(puerto, () => {
  console.log(`Servidor iniciado en http://localhost:${puerto}`);
}); 
