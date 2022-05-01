const Login = require('../models/Login');

module.exports = {
    async getLogin (req, res) {
        try{
            
            const login = await Login.findAll();

            return res.json({
                data: login
            });

        }catch(error){
            return res.status(400).json({error: error});
        }
    }
}