const { Establishment } = require('../model/index')


const createEstablishment = async ( req, res) => {

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
}

const getAllEstablishment = async ( req, res) => {

    try {

        const establishments = await Establishment.findAll()

        res.status(200).json({
            ok: true,
            status: 200,
            body: establishments
        })
        
    } catch (error) {

        res.status(500)
        console.log(error)
         
    }
}


const getEstablishmentById = async ( req, res) => {

    const id = req.params.id
    try {

        const establishment = await Establishment.findOne({
            where: {establishment_id:id}
        })
    
        if (!establishment) {
    
            res.status(400).json({
                ok: false,
                status: 400,
                message: `Cet lieu n'a pas été trouvé`
            })
            
        } else {
            
            res.status(200).json({
                ok: true,
                status: 200,
                body: establishment
             })
            
        }


    } catch (error) {

            res.status(500)

            console.log(error)       
    }
}

const updateEstablishment = async ( req, res) => {

    const id = req.params.id
    const body = req.body

    try {

        const confirmation = await Establishment.findOne({
            where: {establishment_id:id}
        })
    
        if(!confirmation){
    
            res.status(400).json({
                ok: false,
                status: 400,
                message: `Cet lieu n'a pas été trouvé`
            })
        }else {
    
            const establishment = await Establishment.update({       
                establishment_name:     body.establishment_name,
                establishment_adress:   body.establishment_adress,
                establishment_lat:      body.establishment_lat,
                establishment_lon:      body.establishment_lon,
                establishment_city:     body.establishment_city,
                establishment_image:    body.establishment_image
            },
                {
                where: {establishment_id:id}
            })
    
                res.status(200).json({
                    ok: true,
                    status: 200,
                    body: `Etablissements ${ body.establishment_name} modifie`
                })
    
        }
        
    } catch (error) {
        
        res.status(500)
        console.log(error)
    }
}

const deleteEstablishment = async ( req, res) => {

    const id = req.params.id

    try {

    const establishment = await  Establishment.destroy({
        where: {establishment_id:id}
    })

    if (!establishment) {

        res.status(400).json({
            ok: false,
            status: 400,
            message: `Cet etablissement n'a pas été trouvé`
        })
        
    } else {
        
        res.status(200).json({
            ok: true,
            status: 200,
            body: `Etablissement ${establishment} a été supprimé`
         })
    }
        
    } catch (error) {
        res.status(500)
        console.log(error)
    }
}



module.exports = {
    createEstablishment,
    getAllEstablishment,
    getEstablishmentById,
    updateEstablishment,
    deleteEstablishment
}