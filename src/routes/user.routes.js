
/*

Route: /api/utilisateurs                                                                                

*/

const { Router} = require('express');
const { check } = require('express-validator')
const { valiteFields } = require('../middlewares/validate.fields')
const { validateJWT } = require('../middlewares/validate.jwt')

const { createUser, getAllUsers, getUserById, deleteUser, updateUser } = require('../controllers/user.controller')




const router = Router();

router.post("/ajouter-utilisateur", [ 
    check("user_name","Le prenom est requis").not().isEmpty(),
    check("user_lastname","Le nom est requis").not().isEmpty(),
    check("user_pass", "Le mot de passe est requis").not().isEmpty(),
    check("user_email", "Le email est requis").isEmail(),
    check("user_age","l'âge est requis").not().isEmpty(),
    valiteFields
    ],createUser 
);

router.get("/", validateJWT ,getAllUsers);

router.get("/utilisateur/:id", getUserById );

router.put("/utilisateur/:id", [ 
    validateJWT,
    check("user_name","Le prenom est requis").not().isEmpty(),
    check("user_lastname","Le nom est requis").not().isEmpty(),
    check("user_pass", "Le mot de passe est requis").not().isEmpty(),
    check("user_email", "Le email est requis").isEmail(),
    check("user_age","l'âge est requis").not().isEmpty(),
    valiteFields,
    ],updateUser );

router.delete("/utilisateur/:id", validateJWT, deleteUser );






module.exports = router;