
/*

Route: /api/categories

*/

const { Router} = require('express');
const { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } = require('../controllers/categories.controller')




const router = Router();

router.post("/creer-categorie", createCategory );
router.get("/",                getAllCategories);
router.get("/categorie/:id", getCategoryById );
router.put("/categorie/:id", updateCategory );
router.delete("/categorie/:id", deleteCategory );






module.exports = router;