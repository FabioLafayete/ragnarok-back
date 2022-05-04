// const cert = require('../../cert/export')

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
    // dialectOptions: {
    //     ssl: {
    //       key: cert.cKey,
    //       cert: cert.cCert,
    //       ca: cert.cCA
    //     }
    //   }
    
};
 