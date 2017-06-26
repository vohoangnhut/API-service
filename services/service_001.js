const user = require('../models').user

const insertUser = (usrNm, usrPsw ,usrEml, usrImg, usrDes) => {
    return user.create({
        usrNm : usrNm,
        usrEml : usrEml,
        usrPsw : usrPsw,
        usrImg : usrImg,
        usrDes : usrDes
    })
}

const selectAllUser = () => {
    return user.findAll()
}

const findUserByMail = (usrEml) => {
    return user.findOne({
        where: {
            usrEml: usrEml
        }
    })
}

const deleteUserByEmail = (usrEml) => {
    return user.destroy({
                where: {
                    usrEml: usrEml
                }
            });
}

const updateUserByEmail = (usrNm,usrEml,usrPsw) => {
    return user.update({
                    usrPsw: usrPsw,
                    usrNm: usrNm,
                }, {
                    where: {usrEml: usrEml}
                }
    );
}


module.exports = {
    insertUser,
    selectAllUser,
    deleteUserByEmail,
    updateUserByEmail,
    findUserByMail
}