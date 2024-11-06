
const express = require('express');
const mysql = require('mysql');


// database connection and query promisify
var conn = mysql.createPool({
    host     : 'sql8.freemysqlhosting.net',
    user     : 'sql8742954',
    password : 'MPgKSbEs42',
    database : 'sql8742954',
    connectionLimit : 100
  });


  const mySqlQury =(qry)=>{
    return new Promise((resolve, reject)=>{
        conn.query(qry, (err, row)=>{
            if (err) return reject(err);
            resolve(row)
        })
    }) 
  } 

  
  module.exports = {conn, mySqlQury}