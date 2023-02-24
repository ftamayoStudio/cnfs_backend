
/*

Route: /api/favorites                                                                                

*/

const { Router} = require('express');
const { addFavorite, deleteFavorite, getAllFavorite, getFavoriteById } = require('../controllers/favorite.controller')




const router = Router();

router.post("/ajouter-favori", addFavorite );
router.delete("/supprime/:id", deleteFavorite );
router.get("/", getAllFavorite );
router.get("/liste-favorites/:id", getFavoriteById );






module.exports = router;