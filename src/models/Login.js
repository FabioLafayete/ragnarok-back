const {Model, DataTypes} = require('sequelize');


class Login extends Model {
    static init(connection){
        super.init({
            account_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            userid: {
                type: DataTypes.STRING,
            },
            user_pass: DataTypes.STRING,
            sex: DataTypes.ENUM(['M', 'F', 'S']),
            email: DataTypes.STRING,
            group_id: DataTypes.TINYINT,
            state: DataTypes.INTEGER,
            unban_time: DataTypes.INTEGER,
            expiration_time: DataTypes.INTEGER,
            logincount: DataTypes.MEDIUMINT,
            lastlogin: DataTypes.DATE,
            last_ip: DataTypes.STRING,
            birthdate: DataTypes.DATE,
            character_slots: DataTypes.TINYINT,
            pincode: DataTypes.STRING,
            pincode_change: DataTypes.INTEGER,
            vip_time: DataTypes.INTEGER,
            old_group: DataTypes.TINYINT,
            web_auth_token: DataTypes.STRING,
            web_auth_token_enabled: DataTypes.TINYINT,
        },
        {
            sequelize: connection,
            timestamps: false,
            tableName: "login"
        }
        )
    }

};

module.exports = Login;