
/*

Route: /api/categories

*/

const { Router} = require('express');
const { check } = require('express-validator')
const { valiteFields } = require('../middlewares/validate.fields')
const { validateJWT } = require('../middlewares/validate.jwt')



const { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } = require('../controllers/categories.controller')

const router = Router();

router.post("/creer-categorie",[
    check("category_name","Le nom de la categorie est requis").not().isEmpty(),

] ,createCategory );
router.get("/", getAllCategories);
router.get("/categorie/:id", getCategoryById );
router.put("/categorie/:id", validateJWT, [
    check("category_name","Le nom de la categorie est requis").not().isEmpty(),
] ,updateCategory );
router.delete("/categorie/:id", validateJWT, deleteCategory );






module.exports = router;