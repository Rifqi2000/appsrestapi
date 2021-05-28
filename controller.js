'use strict';

var response = require('./res');
var connection = require('./koneksi');
const e = require('express');

exports.index = function(req,res){
    response.ok("REST API application is running",res)
}

// show data
exports.showdata = function(req,res) {
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fields){
        if (error){
            connection.log(error);
        } else {
            response.ok(rows,res)
        }
    });
};

// show data from id
exports.showdatafromId = function(req,res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id = ?', [id], function (error,rows, fields) {
        if (error){
            connection.log(error);
        } else {
            response.ok(rows,res)
        }
    })
}
