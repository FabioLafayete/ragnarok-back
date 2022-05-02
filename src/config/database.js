const fs = require('fs');
const cKey = fs.readFileSync(__dirname + '/client-key.pem');
const cCert = fs.readFileSync(__dirname + '/client-cert.pem');
const cCA = fs.readFileSync(__dirname + '/server-ca.pem');

module.exports = {
    dialect: 'mysql',
    host: '35.237.179.155',
    database: 'valorium',
    username: 'fabio',
    password: '51Fabio51',
    port: 3306,
    define: {
        timestamps: true,
        underscored: true
    },
    dialectOptions: {
        ssl: {
          key: cKey,
          cert: cCert,
          ca: cCA
        }
      }
    
};
 