import Contenedor from "../utils/classContenedor.js"

const contenedor = new Contenedor("productos.txt")

const getProductController = async (req, res) => {
    try {
        const productos = await contenedor.getAll()
        res.render('main.hbs', {productos: productos})
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

const postProductController = async (req, res) => {
    try {
        let productos = await contenedor.postProduct(req)
        res.redirect('/productos')
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

}

const getFormController = (req,res) => {
    try {
        res.render('form.hbs',{})
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export {postProductController, getProductController, getFormController}