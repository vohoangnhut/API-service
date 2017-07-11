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

const updateUserByEmail = (usrNm,usrEml,usrPsw,usrImg,usrDes) => {
    return user.update({
                    usrPsw: usrPsw,
                    usrNm: usrNm,
                    usrImg: usrImg,
                    usrDes: usrDes,
                }, {
                    where: {usrEml: usrEml}
                }
    );
}

const getUserPagin = (page) => {
    return user.findAndCountAll({
        limit: 5,
        offset: parseInt(page),
        order: [['createdAt']]
    })
}

const getUsersList = (limit,offset) => {
    return user.findAndCountAll({
        limit: parseInt(limit),
        offset: parseInt(offset),
        order: [['createdAt']]
    })
}

const getUserInfor = (id) => {
    return user.findOne({
        where : {
            id : id
        }
    })
}




module.exports = {
    insertUser,
    selectAllUser,
    deleteUserByEmail,
    updateUserByEmail,
    findUserByMail,
    getUserPagin,getUsersList,getUserInfor
}