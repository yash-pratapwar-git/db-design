var express = require('express');
var router = express.Router();

const db = require('../database');

router.get('/viewallemployee',async function (req, res) {

  const results = await db.promise().query(`select * from employee`);
  console.log(results[0]);
  console.log("after results");
    
  res.render('viewallemployee', {data: results[0]})
    
  });


  module.exports = router;