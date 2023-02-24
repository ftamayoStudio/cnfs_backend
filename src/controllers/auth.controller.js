
const { User } = require('../model/index')
const bcrypt = require('bcryptjs')
const { generateJWT } = require('../helpers/jwt')

const login = async (req, res) => {

    const { user_email, user_pass } = req.body

    try {

        // verification email
        const userDb = await User.findOne({
            where: { user_email },
            // attributes: ["user_id", "user_name", "user_lastname", "user_age", "user_email", "user_tel", "user_pass"]
        })
        if(!userDb){
            return res.status(404).json({
                ok: false,
                status: 404,
                msg:"ce mail n'existe pas"
            })
        }
        //verification pass
        const validPass = bcrypt.compareSync(user_pass, userDb.user_pass);
        if(!validPass){
            return res.status(404).json({
                ok: false,
                status: 404,
                msg:"ce mot de passe n'existe pas"
            })
        }

        const token = await generateJWT(userDb.user_id, userDb.user_name);

        res.json({
            ok:true,
            msg:"hello",
            token
     
            
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            status: 500,
            msg: "erreur inattendue"
        })
    }

}

module.exports = {
    login
}
