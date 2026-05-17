const express = require('express');

require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000

console.log(process.env)

//configuramos la carpeta estatica (funcion middleware)
app.use(express.static(__dirname + "/public"))

//Establecer ejs como template engine
app.set('view engine' , 'ejs')

//Estableder cual va a ser la carpeta de vistas
app.set("views",__dirname + "/views");


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post('/auth', (req, res) => {
    const { username, password } = req.body;

    const user = { username: username }
})


app.use((req,res,next)=>{
  res.status(404).render("404",{
            titulo:'error 404'
        }) 
});


app.use('/', require('./routes/publicRoutes'))

app.listen(port, () => {
    console.log('a la escucha del ', port)
})