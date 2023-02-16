

const router = require('express').Router();
const { faker } = require("@faker-js/faker")

//models imports
const { Workshop, User, Establishment, Category }  = require("../model/index")


router.get("/ateliers", async ( req, res) => {

    try {

        const workshops = await Workshop.findAll()

        res.status(200).json({
            ok: true,
            status: 200,
            body: workshops
        })
        
    } catch (error) {

        res.status(500)
        console.log(error)
         
    }


    
});

router.get("/atelier/:workshop_id", async ( req, res) => {
    
    const id = req.params.workshop_id

    try {

        const workshop = await Workshop.findOne({
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
                body: workshop
             })
            
        }


    } catch (error) {

            res.status(500)

            console.log(error)       
    }
    
});

router.post("/atelier", async ( req, res) => {

    const body = req.body    

    try {

        const createWorkshop = await Workshop.create({
            workshop_name: body.workshop_name,
            workshop_date: body.workshop_date,
            workshop_hour: body.workshop_hour,
            category_id: body.category_id,
            establishment_id: body.establishment_id
        })
    
         res.status(201).json({
            ok: true,
            status: 201,
            body: `Atelier ${ body.workshop_name} cree`
            
        })
        
    } catch (error) {
        res.status(500)
        console.log(error)
        
    }


});

router.put("/atelier/:workshop_id", async ( req, res) => {
    await Workshop.sync()

    const id = req.params.workshop_id
    const body = req.body

    try {

        const workshopConfirmation = await Workshop.findOne({
            where: {workshop_id:id}
        })
    
        if(!workshopConfirmation){
    
            res.status(400).json({
                ok: false,
                status: 400,
                message: `Cet atelier n'a pas été trouvé`
            })
        }else {
    
            const workshop = await Workshop.update({       
                workshop_name: body.workshop_name,
                workshop_date: body.workshop_date,
                workshop_hour: body.workshop_hour,
                category_id: body.category_id,
                establishment_id: body.establishment_id
            },
                {
                where: {workshop_id:id}
            })
    
                res.status(200).json({
                    ok: true,
                    status: 200,
                    body: `Atelier ${ workshopConfirmation.workshop_name} modifie`
                })
    
        }
        
    } catch (error) {
        
        res.status(500)
        console.log(error)
    }


    

});

router.delete("/atelier/:workshop_id", async ( req, res) => {
        await Workshop.sync()


    const id = req.params.workshop_id

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

});

module.exports = router;