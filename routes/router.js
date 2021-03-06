
const sys_001 = require('../controller/controller_sys001')
const upload = require('../controller/controller_upload')
const api = require('../controller/controller_api')

module.exports = (app , passport) => {
        
    app.route('/').get(sys_001.homePage)
    app.route('/upload').post(upload.upload)
    //   app.route('/api')
    //             .get( angularAPIcontroller.getAll)       
    //             .post( angularAPIcontroller.create) 
    //   app.route('/api/:id')
    //             .get( angularAPIcontroller.getById)     
    //             .delete( angularAPIcontroller.deleteById)
    //             .put(angularAPIcontroller.update)
    app.route('/api/:page').get(api.getData)
    app.route('/users/:limit/:offset').get(api.getListUser)
    app.route('/user/:id').get(api.getUserInfor)
    app.route('/api').get(api.getData)
    /**
     * GET : Read
     * POST : Create
     * PUT : Update
     * DELETE : Delete
     * **/
            
    app.route('/sys_001')
            .get(sys_001.get_sys_001)       
            .post(sys_001.post_sys_001)    
            .put(sys_001.put_sys_001)
            .delete(sys_001.delete_sys_001)

        app.get('*',sys_001.pagenotfound)
}

function isLoggedIn(req, res, next){
	if(req.isAuthenticated())
	        return next();
	
        req.flash('error_msg','You are not logged in');
        res.redirect('/login');
}

function allowCrossDomain (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}