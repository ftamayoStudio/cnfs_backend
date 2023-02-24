const { Category } = require('../model/index')


const createCategory = async ( req, res) => {

    const body = req.body    

    const createCategory = await Category.create({
        category_name: body.category_name,

    })

     res.status(201).json({
        ok: true,
        status: 201,
        body: `Category ${ body.category_name} cree`
        
    })
}

const getAllCategories = async ( req, res) => {

    try {

        const categories = await Category.findAll()

        res.status(200).json({
            ok: true,
            status: 200,
            body: categories
        })
        
    } catch (error) {

        res.status(500)
        console.log(error)
         
    }
}


const getCategoryById = async ( req, res) => {

    const id = req.params.id

    try {

        const categorie = await Category.findOne({
            where: {category_id:id}
        })
    
        if (!categorie) {
    
            res.status(400).json({
                ok: false,
                status: 400,
                message: `Cet categorie n'a pas été trouvé`
            })
            
        } else {
            
            res.status(200).json({
                ok: true,
                status: 200,
                body: categorie
             })
            
        }

    } catch (error) {

            res.status(500)

            console.log(error)       
    }
}

const updateCategory = async ( req, res) => {

    const id = req.params.id
    const body = req.body

    try {

        const categorieConfirmation = await Category.findOne({
            where: {category_id:id}
        })
    
        if(!categorieConfirmation){
    
            res.status(400).json({
                ok: false,
                status: 400,
                message: `Cet categorie n'a pas été trouvé`
            })
        }else {
    
            const categorie = await Category.update({       
                category_name: body.category_name,

            },
                {
                where: {category_id:id}
            })
    
                res.status(200).json({
                    ok: true,
                    status: 200,
                    body: `Categorie ${ categorieConfirmation.category_name} modifie`
                })
    
        }
        
    } catch (error) {
        
        res.status(500)
        console.log(error)
    }
}

const deleteCategory = async ( req, res) => {

    const id = req.params.id

    try {

    const categorie = await Category.destroy({
        where: {category_id:id}
    })

    if (!categorie) {

        res.status(400).json({
            ok: false,
            status: 400,
            message: `Cet categorie n'a pas été trouvé`
        })
        
    } else {
        
        res.status(200).json({
            ok: true,
            status: 200,
            body: `Categorie ${categorie} a été supprimé`
         })
    }
        
    } catch (error) {
        res.status(500)
        console.log(error)
    }
}


module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
}