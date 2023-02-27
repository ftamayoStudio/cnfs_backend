
/*

Route: /api/etablissements                                                                                

*/

const { Router} = require('express');
const { check } = require('express-validator')
const { valiteFields } = require('../middlewares/validate.fields')
const { validateJWT } = require('../middlewares/validate.jwt')


const { createEstablishment, getAllEstablishment, getEstablishmentById, updateEstablishment, deleteEstablishment } = require('../controllers/establishment.controller')

const router = Router();

router.post("/creer-lieu",[
    check("establishment_name","Le nom de l'établissement est requis").not().isEmpty(),
    check("establishment_adress","Le nom de l'établissement est requis").not().isEmpty(),
    check("establishment_city","Le nom de l'établissement est requis").not().isEmpty(),

], createEstablishment );

router.get("/", getAllEstablishment);

router.get("/:id", getEstablishmentById);

router.put("/:id", validateJWT,[
    check("establishment_name","Le nom de l'établissement est requis").not().isEmpty(),
    check("establishment_adress","Le nom de l'établissement est requis").not().isEmpty(),
    check("establishment_city","Le nom de l'établissement est requis").not().isEmpty(),

] , updateEstablishment );

router.delete("/:id", validateJWT, deleteEstablishment );







module.exports = router;