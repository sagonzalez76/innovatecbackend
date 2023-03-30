// se crearan las rutas para el rol de usurios de la Base de Datos.
// se importa el modulo Router del paquete de express
import { Router} from 'express'

// importar los controladores realizados para cada ruta
import {getUsers, getUser, postUsers, UpdateUser, delUser } from '../controllers/userController.js'

const router = Router()



// router.get("/usuarios", (req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.setHeader("Access-Control-Allow-Credentials", "true");
//     res.setHeader("Access-Control-Max-Age", "1800");
//     res.setHeader("Access-Control-Allow-Headers", "content-type");
//     res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
//      });

// Crear rutas utilizando el nombre de la constante
// que se le da al controlador de la logica con DB
router.get('/usuarios', getUsers)

// crear la ruta para paserle el paramentro ID
router.get('/usuarios/:id', getUser)

router.post('/usuarios', postUsers)

router.patch('/usuarios/:id', UpdateUser)

router.delete('/usuarios/:id', delUser)

// Codigo para permitor los Cors desde el backcend

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();});


//exportar la rutas para ser usadas en el app.js
export default router

