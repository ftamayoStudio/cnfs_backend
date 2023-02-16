const router = require('express').Router();

//models imports
const { Workshop, User, Establishment, Category }  = require("../model/index")

router.post("/establishment", async ( req, res) => {

    const body = req.body    

    const createEstablishment = await Establishment.create({
        establishment_name:     body.establishment_name,
        establishment_adress:   body.establishment_adress,
        establishment_lat:      body.establishment_lat,
        establishment_lon:      body.establishment_lon,
        establishment_city:     body.establishment_city,
        establishment_image:    body.establishment_image

    })

     res.status(201).json({
        ok: true,
        status: 201,
        body: `Establishment ${ body.establishment_name} cree`
        
    })
});


module.exports = router;