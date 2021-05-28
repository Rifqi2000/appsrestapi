'use strict';

var response = require('./res');
var connection = require('./koneksi');
const e = require('express');
const conn = require('./koneksi');

exports.index = function(req,res){
    response.ok("REST API application is running",res);
};

// show data
exports.showdata = function(req,res) {
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fields){
        if (error){
            connection.log(error);
        } else {
            response.ok(rows,res);
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
            response.ok(rows,res);
        }
    });
};

// add data 
exports.addData = function(req,res) {

    //based on the column names in database
    var nim = req.body.nim;
    var nama =req.body.nama;
    var jurusan = req.body.jurusan; 

    connection.query('INSERT into mahasiswa (nim,nama,jurusan) VALUES (?,?,?)',[nim,nama,jurusan], function (error,rows,fields) {
        if (error){
            connection.log(error);
        } else {
            response.ok("Add data was successful",res);
        } 
    });
};