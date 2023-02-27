
/*

Route: /api/ateliers                                                                               

*/

const { Router} = require('express');
const { check } = require('express-validator')
const { valiteFields } = require('../middlewares/validate.fields')
const { validateJWT } = require('../middlewares/validate.jwt')



const { createWorkshop, getAllWorkshops, getWorkshopById, updateWorkshop, deleteWorkshop } = require('../controllers/workshop.controller')

const router = Router();

router.post("/ajouter-atelier", createWorkshop );
router.get("/",                getAllWorkshops);
router.get("/atelier/:id", getWorkshopById );
router.put("/atelier/:id", updateWorkshop );
router.delete("/atelier/:id", validateJWT, deleteWorkshop );






module.exports = router;