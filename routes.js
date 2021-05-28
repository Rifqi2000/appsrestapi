//navigation
'use strict';

module.exports = function(app){
    var myjson = require('./controller');

    app.route('/')
        .get(myjson.index);
    app.route('/showdata')
        .get(myjson.showdata);
    app.route('/showdata/:id')
        .get(myjson.showdatafromId);
    app.route('/adddata')
        .post(myjson.addData);
}