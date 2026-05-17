
//Get index
const getIndex = (req, res) => {
    res.render('index', {
        titulo:"Este es el título del index desde el render"
    });
}

//Get Servicios
const getServicios =  (req, res) => {
    res.render('servicios',{
        titulo:"Este es el título de servicios desde el render",
        servicios: [
            {
                id: 1,
                title: "Servicio 1",
                descripcion: "Esta es la descripción del servicio 1"
            },
            {
                id: 2,
                title: "Servicio 2",
                descripcion: "Esta es la descripción del servicio 2"
            },
            {
                id: 3,
                title: "Servicio 3",
                descripcion: "Esta es la descripción del servicio 3"
            },
            {
                id: 4,
                title: "Servicio 4",
                descripcion: "Esta es la descripción del servicio 4"
            }
        ]
    });
}
// get usuarios
const getUsuarios = async(req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const usuarios = await response.json()

    res.render('usuarios',{
        titulo:"Este es el título de usuarios desde el render",
        usuarios:
        [
            {
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz"
            },
            {
                name: "Ervin Howell",
                username: "Antonette",
                email: "Shanna@melissa.tv"
            },
            {
                name: "Clementine Bauch",
                username: "Samantha",
                email: "Nathan@yesenia.net"
            },
            {
                name: "Patricia Lebsack",
                username: "Karianne",
                email: "Julianne.OConner@kory.org"
            },
            {
                name: "Chelsey Dietrich",
                username: "Kamren",
                email: "Lucio_Hettinger@annie.ca"
            }
        ]
    });
}
// get Login 
const getLogin = (req, res) => {
    res.send(`
        <html>
            <head>
                <title></title>
            </head>
            <body>
                <form method="POST" action="/auth">
                
                    <div>Nombre de Usuario: <input type='text' name='username'> </div>
                    <div>Contraseña: <input type='text' name='paswword'> </div>
                    <div> <input type='submit' value='Iniciar sesión'  >  </div>
                
                </form>
            </body>
        </html>
    `);
}

module.exports = {
  getIndex,
  getServicios,
  getUsuarios,
  getLogin
}