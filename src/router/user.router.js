const router = require('express').Router();

//models imports
const { Workshop, User, Establishment, Category }  = require("../model/index")

router.post("/user", async ( req, res) => {

    const body = req.body

    try {
        
        const createUser = await User.create({
            user_name: body.user_name,
            user_lastname:body.user_lastname,
            user_tel: body.user_tel,
            user_age: body.user_age,
            user_email:body.user_email
    
        })
    
         res.status(201).json({
            ok: true,
            status: 201,
            body: `Utulisateur ${ body.user_name} cree`
            
        })


    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            body: error
            
        })
    }


});


module.exports = router;