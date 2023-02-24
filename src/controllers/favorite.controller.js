const { Favorite, User } = require('../model/index')



const addFavorite =  async ( req, res) => {


    const body = req.body    

    const createFavorite = await Favorite.create({
        userUserId: body.user_id,
        workshopWorkshopId: body.workshop_id,

    })

     res.status(201).json({
        ok: true,
        status: 201,
        body: `Ajoute a favori`
        
    })
};

const deleteFavorite = async ( req, res) => {

    const id = req.params.id

    try {


    const workshop = await Workshop.destroy({
        where: {workshop_id:id}
    })

    if (!workshop) {

        res.status(400).json({
            ok: false,
            status: 400,
            message: `Cet atelier n'a pas été trouvé`
        })
        
    } else {
        
        res.status(200).json({
            ok: true,
            status: 200,
            body: `Atelier ${workshop} a été supprimé`
         })
        
    }
        
    } catch (error) {
        res.status(500)
        console.log(error)
        
    }
 

}


const getAllFavorite = async ( req, res) => {

    try {

        const favorites = await Favorite.findAll()

        res.status(200).json({
            ok: true,
            status: 200,
            body: favorites
        })
        
    } catch (error) {

        res.status(500)
        console.log(error)
         
    }
}


const getFavoriteById = async ( req, res) => {

    const id = req.params.id

    try {

        const favorites = await Favorite.findAll({
            where: {userUserId:id},
        })
    
        if (!favorites) {
    
            res.status(400).json({
                ok: false,
                status: 400,
                message: `liste de favoris vide`
            })
            
        } else {
            
            res.status(200).json({
                ok: true,
                status: 200,
                body: favorites
             })
            
        }

    } catch (error) {

            res.status(500)

            console.log(error)       
    }
}


module.exports = {
    addFavorite,
    deleteFavorite,
    getAllFavorite,
    getFavoriteById
}