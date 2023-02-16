const router = require('express').Router();

//models imports
const { Workshop, User, Establishment, Category }  = require("../model/index")

router.post("/category", async ( req, res) => {

    const body = req.body    

    const createCategory = await Category.create({
        category_name: body.category_name,

    })

     res.status(201).json({
        ok: true,
        status: 201,
        body: `Category ${ body.category_name} cree`
        
    })
});


module.exports = router;