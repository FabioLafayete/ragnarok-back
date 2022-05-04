const {Model, DataTypes} = require('sequelize');


class Login extends Model {
    static init(connection){
        super.init({
            account_id: {
                type: DataTypes.INTEGER(10),
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            userid: {
                type: DataTypes.STRING(23),
                allowNull: false
            },
            user_pass: {
                type: DataTypes.STRING(32),
                allowNull: false
            },
            sex: {
                type: DataTypes.ENUM(['M', 'F', 'S']),
                allowNull: false,
                defaultValue: "M"
            },
            email: {
                type: DataTypes.STRING(39),
                allowNull: false,
            },
            group_id: {
                type: DataTypes.TINYINT(4),
                allowNull: false,
                defaultValue: 0
            },
            state: {
                type: DataTypes.INTEGER(10),
                allowNull: false,
                defaultValue: 0
            },
            unban_time: {
                type: DataTypes.INTEGER(10),
                allowNull: false,
                defaultValue: 0
            },
            expiration_time: {
                type: DataTypes.INTEGER(10),
                allowNull: false,
                defaultValue: 0
            },
            logincount: {
                type: DataTypes.MEDIUMINT(8),
                allowNull: false,
                defaultValue: 0
            },
            lastlogin: DataTypes.DATE,
            last_ip: {
                type: DataTypes.STRING(100),
                allowNull: false,
                defaultValue: ""
            },
            birthdate: DataTypes.DATE,
            character_slots: {
                type: DataTypes.TINYINT(3),
                allowNull: false,
                defaultValue: 0
            },
            pincode: {
                type: DataTypes.STRING(4),
                allowNull: false,
                defaultValue: ""
            },
            pincode_change: {
                type: DataTypes.INTEGER(10),
                allowNull: false,
                defaultValue: 0
            },
            vip_time: {
                type: DataTypes.INTEGER(10),
                allowNull: false,
                defaultValue: 0
            },
            old_group: {
                type: DataTypes.TINYINT(4),
                allowNull: false,
                defaultValue: 0
            },
            web_auth_token: DataTypes.STRING(17),
            web_auth_token_enabled: {
                type: DataTypes.TINYINT(4),
                allowNull: false,
                defaultValue: 0
            },
            cellphone: DataTypes.STRING(20)
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