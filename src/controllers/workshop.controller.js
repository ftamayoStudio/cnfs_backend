const { Workshop, Category, Establishment } = require('../model/index')



const createWorkshop =  async ( req, res) => {

    const body = req.body
    body.establishments = body.establishment_id
    


    try {

        const createWorkshop = await Workshop.create(
            body
        )

        // const createWorkshop = await Workshop.create({
        //     workshop_name: body.workshop_name,
        //     workshop_date: body.workshop_date,
        //     workshop_hour: body.workshop_hour,
        //     establishments:body.establishment_id,
        //     category_id: body.category_id,
        //     establishment_id: body.establishment_id
        // })
    
         res.status(201).json({
            ok: true,
            status: 201,
            
            body: `Atelier ${ body.workshop_name} cree`
            
        })
        
    } catch (error) {
        res.status(500)
        console.log(error)
        
    }
}


const getAllWorkshops = async ( req, res) => {

    try {

        const workshops = await Workshop.findAll({

        // Logro obtener la informacion de establishments y category por que workshop tiene relacion
        // con ambas tablas
             include: [
                {
                    model: Establishment,
                    attributes:["establishment_name"]
                    
                 },
                 {
                    model: Category,
                    attributes:["category_name"]
                 }
              ]
              
        })

        res.status(200).json({
            ok: true,
            status: 200,
            body: workshops
        })
        
    } catch (error) {

        res.status(500)
        console.log(error)
         
    }
}


const getWorkshopById = async ( req, res) => {

    const id = req.params.id

    try {

        const workshop = await Workshop.findOne({
            where: {workshop_id:id}
        })
    
        if (!workshop) {
    
            res.status(400).json({
                ok: false,
                status: 400,
                message: `Cet atelier n'a pas ??t?? trouv??`
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
}

const updateWorkshop = async ( req, res) => {

    const id = req.params.id
    const body = req.body

    try {

        const workshopConfirmation = await Workshop.findOne({
            where: {workshop_id:id}
        })
    
        if(!workshopConfirmation){
    
            res.status(400).json({
                ok: false,
                status: 400,
                message: `Cet atelier n'a pas ??t?? trouv??`
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

}

const deleteWorkshop = async ( req, res) => {

    const id = req.params.id

    try {


    const workshop = await Workshop.destroy({
        where: {workshop_id:id}
    })

    if (!workshop) {

        res.status(400).json({
            ok: false,
            status: 400,
            message: `Cet atelier n'a pas ??t?? trouv??`
        })
        
    } else {
        
        res.status(200).json({
            ok: true,
            status: 200,
            body: `Atelier ${workshop} a ??t?? supprim??`
         })
        
    }
        
    } catch (error) {
        res.status(500)
        console.log(error)
        
    }
 

}




module.exports = {
    createWorkshop,
    getAllWorkshops,
    getWorkshopById,
    updateWorkshop,
    deleteWorkshop
}