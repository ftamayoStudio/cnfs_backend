
const { response } = require('express')
const jwt = require('jsonwebtoken')


const validateJWT = ( req, res = response, next) => {

    //read token
    const token = req.header('x-token');

    if( !token ){
        return res.status(401).json({
            ok:false,
            status:401,
            msg:"Sans token vous n'avez pas accès"
        })
    }

    try {

        const { user_id, user_name } = jwt.verify( token, process.env.JWT_KEY);

        req.user_id = user_id
        req.user_name = user_name

        next()
        
    } catch (error) {
        return res.status(401).json({
            ok:false,
            status:401,
            msg:"Ce token n'est pas valide"
        })
    }

}

module.exports = {
    validateJWT
}