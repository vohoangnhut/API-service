
/**
 * db is var db = new Sequelize(process.env.DATABASE_URL);
 * DataTypes is const Sequelize = require('sequelize')
 */
module.exports = (db,DataTypes) => {

    let attribute = {
            usrNm: {
                type: DataTypes.STRING
            },
            usrPsw: {
                type: DataTypes.TEXT
            },
            usrEml: {
                type: DataTypes.STRING
            },
            usrImg : {
                type : DataTypes.STRING
            },
            usrDes : {
                type : DataTypes.STRING
            }
    }

    const options = {
        freezeTableName: true // Model tableName will be the same as the model name
    }


    return db.define('user',attribute,options);
}