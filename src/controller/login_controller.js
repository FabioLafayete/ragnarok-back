const Login = require('../models/Login');
const { Op } = require("sequelize");
const emailservice = require('../service/email_service');
const html = require('../config/html/cadastro-html')

module.exports = {
    async postCreateLogin (req, res) {

        const {id, password, email, sex, cellphone} = req.body;

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
                       {userid: id} ,
                       {cellphone: cellphone}
                    ]
                 }
            });

            if(userFind){
                if(userFind.userid != id && userFind.email == email){
                    return res.status(400).json({error: "Email ja cadastrado na base."});
                } else if(userFind.userid != id && userFind.email != email && userFind.cellphone == cellphone){
                    return res.status(400).json({error: "Celular já cadastrado na base"});
                } else {
                    return res.status(400).json({error: "Id já cadastrado na base"});
                }
            }

            const user = await Login.create(
                {
                    userid: id, 
                    user_pass: password, 
                    email, 
                    sex: sex.toUpperCase(), 
                    cellphone
                });

            if(user){
                emailservice.send(email, html).then((value) => {
                    console.log('email enviado');
                });
                return res.status(201).json({user});
            } else {
                return res.status(500).json({error: 'Erro ao criar usuário'});
            }


        }catch(error){
            return res.status(500).json({error: error});
        }
    },

    async postLogin(req, res){
        const {id, password, email} = req.body;
        try{

            if(!id && !email){
                return res.status(400).json({error: `id ou email é obrigatório`});
            }
            if(!password){
                return res.status(400).json({error: `'password' é obrigatório`});
            }
            
            const userFind = await Login.findOne({
                where: {
                    [Op.or]: [
                       {email: email},
                       {userid: id}
                    ],
                    [Op.and]:[{password: password}]
                 }
            });

            if(!userFind){
                return res.status(404).json({error: `usuário ou senha incorreta.`});
            }

            return res.json(userFind);


        }catch(error){
            return res.status(500).json({error: error});
        }
    }
}