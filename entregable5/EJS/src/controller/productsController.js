import Contenedor from "../utils/classContenedor.js"

const contenedor = new Contenedor("productos.txt")

const getProductController = async (req, res) => {
    try {
        const productos = await contenedor.getAll()
        res.render('main.ejs', {productos: productos})
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

const postProductController = async (req, res) => {

    let productos = await contenedor.postProduct(req)
    res.redirect('/productos')
}

const getFormController = (req,res) => {
    res.render('form.ejs',{})
}

export {postProductController, getProductController, getFormController}