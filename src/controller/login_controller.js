const Login = require('../models/Login');
const { Op } = require("sequelize");


module.exports = {
    async getLogin (req, res) {
        try{
            const login = await Login.findAll();
            return res.json(login);
        }catch(error){
            return res.status(500).json({error: error});
        }
    },

    async postCreateLogin (req, res) {

        const {id, password, email, sex, group_id} = req.body;

        try{

            if(!id){
                return res.status(400).json({error: `'id' é obrigatório`});
            }
            if(!password){
                return res.status(400).json({error: `'password' é obrigatório`});
            }
            if(!email){
                return res.status(400).json({error: `'email' é obrigatório`});
            }
            if(sex){
                if(sex.toUpperCase() !== 'M' && sex.toUpperCase() !== 'F' && sex.toUpperCase() !== 'S'){
                    return res.status(400).json({error: `'sex' precisa ser 'M', 'F' ou 'S'`});
                }
            }

            const userFind = await Login.findOne({
                where: {
                    [Op.or]: [
                       {email: email},
                       {userid: id} 
                    ]
                 }
            });

            if(userFind){
                if(userFind.userid != id && userFind.email == email){
                    return res.status(400).json({error: "Email ja cadastrado na base."});
                } else {
                    return res.status(400).json({error: "Id já cadastrado"});
                }
            }

            const user = await Login.create(
                {
                    userid: id, 
                    user_pass: password, 
                    email, 
                    sex: sex.toUpperCase(), 
                    group_id,
                });

            return res.status(201).json({user});


        }catch(error){
            return res.status(500).json({error: error});
        }
    }
}