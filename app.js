const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.resolve(__dirname, "./public")

//Para configurar nuestra carpeta de archivos públicos
app.use(express.static(publicPath));

app.listen(process.env.PORT||3000,function(){
  console.log("servidor corriendo en puerto 3000")
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
})

app.get('/register.html', (req, res) => {
  res.sendFile(path.resolve(__dirname,'./views/register.html'))});

app.get('/login.html', (req, res) => {
  res.sendFile(path.resolve(__dirname,'./views/login.html'))});
