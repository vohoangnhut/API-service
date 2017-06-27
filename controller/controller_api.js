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

module.exports = {
  getData
}