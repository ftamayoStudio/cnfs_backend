
/*

Route: /api/ateliers                                                                               

*/

const { Router} = require('express');
const { createWorkshop, getAllWorkshops, getWorkshopById, updateWorkshop, deleteWorkshop } = require('../controllers/workshop.controller')




const router = Router();

router.post("/ajouter-atelier", createWorkshop );
router.get("/",                getAllWorkshops);
router.get("/atelier/:id", getWorkshopById );
router.put("/atelier/:id", updateWorkshop );
router.delete("/atelier/:id", deleteWorkshop );






module.exports = router;