const service_001 = require('../services/service_001')

const getData = (req,res) => {
  //res.render('sys_001', {title: 'USER'})
  var page = 0; 
  if(req.params.page)
    page = req.params.page
    
  console.log(page);
  service_001.getUserPagin(page)
    .then((usersLst)=> {
            res.end(JSON.stringify(usersLst))
    })

}



const getListUser = (req,res) => {
  //res.render('sys_001', {title: 'USER'})

  limit = req.params.limit
  offset = req.params.offset
    
  console.log(limit);
  console.log(offset);
  service_001.getUsersList(limit,offset)
    .then((usersLst)=> {
            res.end(JSON.stringify(usersLst))
    })

}

const getUserInfor = (req,res) => {
  //res.render('sys_001', {title: 'USER'})

  id = req.params.id
    
  console.log(id);
  service_001.getUserInfor(id)
    .then((user)=> {
            res.end(JSON.stringify(user))
    })

}

module.exports = {
  getData,getListUser,getUserInfor
}