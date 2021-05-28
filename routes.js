//navigation
'use strict';

module.exports = function(app){
    var myjson = require('./controller');

    app.route('/')
        .get(myjson.index);
    app.route('/showdata')
        .get(myjson.showData);
    app.route('/showdata/:id')
        .get(myjson.showDatafromId);
    app.route('/adddata')
        .post(myjson.addData);
    app.route('/editdata')
        .put(myjson.editData);
    app.route('/deletedata')
        .delete(myjson.deleteData)
}