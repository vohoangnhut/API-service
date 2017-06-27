const service_001 = require('../services/service_001')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function homePage(req,res){
    res.render('home',{title:'Home'});
}

const pagenotfound = (req, res) => {
  res.render('404',{title:'PAGE NODE FOUND', noneNav : true});
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const get_sys_001 = (req,res) => {
  //res.render('sys_001', {title: 'USER'})
  service_001.selectAllUser()
    .then((usersLst)=> {
        console.log(`render user mgmt - get`)
          const model = {
                users: usersLst,
                //lstErrors : {msg:'asdsd'},
                title: 'USER'
            }
        res.render('sys_001', model)
    })

}

//Save
const post_sys_001 = (req,res) => {

    const txtUsrNm = req.body.txtUsrNm;
    const txtEmail = req.body.txtEmail;
    const txtPsw = req.body.txtPsw;
    const txtDes = req.body.txtDes;
    const imgPath = req.body.imgPath;
    service_001.insertUser(txtUsrNm,txtPsw, txtEmail.toLowerCase(),imgPath,txtDes)
            .then((user)=>{

                const responseObj = {
                    msg : 'Inserted Successfully',
                    status  : '200'
                }
                res.end(JSON.stringify(responseObj))
            })

    
}

//Update
const put_sys_001 = (req,res) => {

    const usrNm = req.body.txtUsrNm;   
    const usrEml = req.body.txtEmail;    
    const usrPsw = req.body.txtPsw;    
    const txtDes = req.body.txtDes;
    const imgPath = req.body.imgPath;
    service_001.findUserByMail(usrEml.toLowerCase())
        .then((user)=>{
            if(!user)
                res.end('Mail dont exist');
            else
                {
                    
                    service_001.updateUserByEmail(usrNm,usrEml,usrPsw,imgPath,txtDes)
                        .then((abc)=>{
                            const responseObj = {
                                msg : 'Updated Successfully',
                                status  : '200'
                            }
                            res.end(JSON.stringify(responseObj));
                    })
                }
        })
     
 
}

const delete_sys_001 = (req,res) => {
    console.log(`comming to delete`)
    const usrEml = req.body.usrEml;    
    service_001.deleteUserByEmail(usrEml)
        .then((abc)=>{
            const responseObj = {
                msg : 'Deleted Successfully',
                status  : '200'
            }
            res.end(JSON.stringify(responseObj));
        })
}

module.exports = {
  homePage,
  pagenotfound,
  get_sys_001,
  post_sys_001,
  put_sys_001,
  delete_sys_001
}