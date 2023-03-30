// importar el modulo de la coneccion a la BD
import {pool} from '../dbConect.js'

// Crear metodo GET
export const getUsers = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM users')
        res.json(rows)
    }catch(error) { // si algo sale mal
        return res.status(500).json({
        message: 'Estas Frito'
        })
    }
}
// Crer Get con parametro id
export const getUser = async (req, res) => {
    try{
        // realizar la consulta de la DB donde se pida el ID
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?',[req.params.id])
        // muestre error si no se encuenta el id
        if (rows.length <= 0) return res.status(404).json({
        mensaje: 'usuario no encontrado'
    })
    // muestra el registro con el id ingresado
    res.json(rows[0])
    }catch(error) { // si algo sale mal
        return res.status(500).json({
        message: 'Estas Frito'
        })
    }
}

//  metodo para crear usuario POST
export const postUsers = async (req, res)=>{
    try {
        const {name, city, rol} = req.body //configurar el body del json a enviar
        // insertar los datos mediante JSON
        const [rows] = await pool.query('INSERT INTO users (name, city, rol) VALUES (?,?,?)', [name, city, rol ])
        res.send({ // muestra los datos ingresados como resultado del envio JSON
        id: rows.insertId,
        name,
        city,
        rol
    })
    } catch (error) {
        return res.status(500).json({
            message: 'Estas Frito'
            })
    }
}

// Metodo para Eliminar Usuario DELETE
export const delUser = async (req, res)=>{
    try {
        const result = await pool.query('DELETE FROM users WHERE id=?', 
        [req.params.id])
        console.log(result)
        res.send('eliminado')
    } catch (error) {
        return res.status(500).json({
            message: 'Estas Frito'
            })
    }
}

// Metodo para actualizar Usuario PATCH
export const UpdateUser = async (req, res)=>{
    try {
        const { id } = req.params
        const { name, city, rol } = req.body
        const [result] = await pool.query('UPDATE users SET name = IFNULL(?, name), city = IFNULL(?, city), rol = IFNULL(?, rol) WHERE id=?',
        [name, city, rol, id])
    
    if(result.affectedRows === 0) return res.status(404).json({
        mensae: 'user no encontrado'
    })
    const [rows] = await pool.query('SELECT * FROM users WHERE id=?', [id])
    res.jon(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Estas Frito'
            })
    }
}