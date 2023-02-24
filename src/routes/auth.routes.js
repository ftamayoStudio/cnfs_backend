
/*

Route: /api/auth                                                                              

*/


const { Router} = require('express');
const { login } = require('../controllers/auth.controller')
const { check } = require('express-validator')
const { valiteFields } = require('../middlewares/validate.fields')


const router = Router();

router.post("/", [
    check("user_email", "Le email est requis").isEmail(),
    check("user_pass", "Le mot de passe est requis").not().isEmpty(),
    valiteFields
    ],
    login 
);




module.exports = router;