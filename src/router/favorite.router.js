const router = require('express').Router();

//models imports
const { Workshop, User, Establishment, Category, Favorite }  = require("../model/index")

router.post("/favorite", async ( req, res) => {


    const body = req.body    
    console.log(body)

    const createCategory = await Favorite.create({
        userUserId: body.user_id,
        workshopWorkshopId: body.workshop_id,

    })

     res.status(201).json({
        ok: true,
        status: 201,
        body: `Ajoute a favori`
        
    })
});


module.exports = router;