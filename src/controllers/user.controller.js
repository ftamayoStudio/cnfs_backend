
const { User, Favorite, Workshop } = require('../model/index')
const bcrypt = require('bcryptjs')
const { generateJWT } = require('../helpers/jwt')



const createUser = async (req, res) => {

    const body = req.body

    try {

        const emailExist = await User.findOne({
            where: { user_email: body.user_email }
        });
        const numberExist = await User.findOne({
            where: { user_tel: body.user_tel }
        });


        if (emailExist) {
            return res.status(400).json({
                ok: false,
                msg: "Cet e-mail est déjà enregistré"
            })
        }

        if (numberExist) {
            return res.status(400).json({
                ok: false,
                msg: "Cet téléphone est déjà enregistré"
            })
        }

        const salt = bcrypt.genSaltSync();
        body.user_pass = bcrypt.hashSync(body.user_pass, salt);


        const create_user = await User.create({
            user_name: body.user_name,
            user_lastname: body.user_lastname,
            user_tel: body.user_tel,
            user_age: body.user_age,
            user_email: body.user_email,
            user_pass: body.user_pass
        })

        const token = await generateJWT(create_user.user_id, create_user.user_name);


        res.status(201).json({
            ok: true,
            status: 201,
            body: `Utulisateur ${body.user_name} cree`,
            token

        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            status: 500,
            msg: "erreur inattendue"

        });
    }
}


const getAllUsers = async (req, res) => {

    try {

        const users = await User.findAll({ attributes: ["user_id", "user_name", "user_lastname", "user_age", "user_email", "user_tel","user_pass"] })

        res.status(200).json({
            ok: true,
            status: 200,
            body: users
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            status: 500,
            msg: "erreur inattendue"
        });
    }
}


const getUserById = async (req, res) => {

    const id = req.params.id

    try {

        const user = await User.findOne({
            where: { user_id: id },
            attributes: ["user_id", "user_name", "user_lastname", "user_age", "user_email", "user_tel", "user_pass"]

        })

        if (!user) {

            res.status(400).json({
                ok: false,
                status: 400,
                message: `Cet utilisateur n'a pas été trouvé`
            })

        } else {

            res.status(200).json({
                ok: true,
                status: 200,
                body: user
            })

        }


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            status: 500,
            msg: "erreur inattendue"
        });
    }
}

const updateUser = async (req, res) => {

    const id = req.params.id
    const body = req.body

    try {

        const userConfirmation = await User.findOne({
            where: { user_id: id }
        })

        if (!userConfirmation) {

            return res.status(404).json({
                ok: false,
                status: 404,
                message: `Cet utilisateur n'a pas été trouvé`
            });
        } else {

            const {user_pass, user_email, user_tel, google, ...fields} = req.body

            if (userConfirmation.user_email !== user_email) {
                
                const existEmail = await User.findOne ( { where: { user_email: user_email } } );
                if(existEmail) {
                    return res.status(400).json({
                        ok: false,
                        msg: "Cet e-mail est déjà enregistré"
                    })
                }
            }
            if (userConfirmation.user_tel !== user_tel) {

                const existTel = await User.findOne ( { where: { user_tel: user_tel } } );
                if(existTel) {
                    return res.status(400).json({
                        ok: false,
                        msg: "Cet telephone est déjà enregistré"
                    })
                }
            }


            // TODO:Verify is exist valid token

            // Return fields email and tele to data user
            // fields.user_email = user_email
            // fields.user_tel = user_tel

            const user = await User.update({fields, user_email, user_tel
            },
                {
                    where: { user_id: id }
                })

            res.status(200).json({
                ok: true,
                status: 200,
                body: `Utilisateur ${userConfirmation.user_name} modifie`
            })

        }





    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            status: 500,
            msg: "erreur inattendue"
        });

    }
}

const deleteUser = async (req, res) => {

    const id = req.params.id

    try {

        const user = await User.findOne({
            where: { user_id: id }
        })
        
        if (!user) {
            
            res.status(400).json({
                ok: false,
                status: 400,
                message: `Cet utilisateur n'a pas été trouvé`
            })
            
        } else {

            const deleteUser = await User.destroy({
                where: { user_id: id }
            })

            res.status(200).json({
                ok: true,
                status: 200,
                body: `Utilisateur ${user.user_name} a été supprimé`
            })

        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            status: 500,
            msg: "erreur inattendue"

        })
    }
}


module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}