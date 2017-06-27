const path =  require('path')
var formidable = require('formidable');
var fs      = require('fs')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function upload(req,res){
    var namefile = '_' + Math.random().toString(36).substr(2, 9) + '.png';

    fs.writeFile( path.join(__dirname,'../public/uploads/images/') + namefile , req.body.file , 'base64', function(err) {
        if (err) {
            //response.send("failed to save");
            console.log("failed to save")
        } else {
            console.log("succeeded in saving")
            res.send('/uploads/images/' + namefile );
        }
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = {
  upload
}