const express = require('express');
const router = express.Router();

const pool = require('../utils/mysql');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const connection = await pool.getConnection();
  const data = await connection.query('SELECT * FROM USER');
  const results = data[0];
  res.json({ status:200, arr:results });  
});

router.get('/b', (req, res, next) => {
  res.send('baby');
});

router.get('/a', function(req, res, next) {
  res.send('adult');
});

module.exports = router;
