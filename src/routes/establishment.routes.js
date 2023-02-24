
/*

Route: /api/etablissements                                                                                

*/

const { Router} = require('express');
const { createEstablishment, getAllEstablishment, getEstablishmentById, updateEstablishment, deleteEstablishment } = require('../controllers/establishment.controller')




const router = Router();

router.post("/creer-lieu", createEstablishment );
router.get("/",                getAllEstablishment);
router.get("/:id", getEstablishmentById);
router.put("/:id", updateEstablishment );
router.delete("/:id", deleteEstablishment );






module.exports = router;