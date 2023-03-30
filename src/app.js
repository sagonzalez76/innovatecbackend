// utilizar la forma de import paquetes con ES Modules
import express from 'express'

// importar los archivos donde estan las rutas de cada rol
import indexRoute from './routes/indexRoute.js'
import userRoutes from './routes/userRoutes.js'




// crear contante app para utilizar express
const app = express()

//use el interprete de objetos JSON
app.use(express.json())

// Usar las rutas creadas
app.use('/',indexRoute)
app.use('/', userRoutes)



// exportar el app àra ser utilizado en index.js
export default app