var formidable = require('formidable');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function upload(req,res){
    var form = new formidable.IncomingForm();

    // specify that we want to allow the user to upload multiple files in a single request
    form.multiples = true;

    form.uploadDir = path.join(__dirname, '/uploads');
    
    // every time a file has been uploaded successfully,
    // rename it to it's orignal name
    form.on('file', function(field, file) {
        fs.rename(file.path, path.join(form.uploadDir, file.name));
    });

      // log any errors that occur
    form.on('error', function(err) {
        console.log('An error has occured: \n' + err);
    });

    // once all the files have been uploaded, send a response to the client
    form.on('end', function() {
        res.end('success');
    });

    // parse the incoming request containing the form data
    form.parse(req);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = {
  upload
}