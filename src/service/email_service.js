const config = require('../config/global');
const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(config.EMAIL_API);

exports.send = async (to, body) => {
    try{
        sendgrid.send({
            to: to,
            from: config.EMAIL_FROM,
            subject: config.EMAIL_TMPL,
            html: body
        });
    }catch(e){

    }
}