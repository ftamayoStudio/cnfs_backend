const jwt = require('jsonwebtoken');

const generateJWT = ( user_id, user_name ) => {

    return new Promise((resolve, reject) => {

        const payload = {
            user_id,
            user_name,
        }
    
        jwt.sign( payload, process.env.JWT_KEY, {
            expiresIn: '12h'
        }, ( err, token ) => {
    
            if ( err ) {
                console.log(err);
                reject('problème pour générer un token')
            }else {

                resolve( token );
            }
        });

    })



}

module.exports = {
    generateJWT
}