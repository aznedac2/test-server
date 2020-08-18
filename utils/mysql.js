require('dotenv').config();

const mysql = require('mysql2/promise');
const pool = mysql.createPool({
  host: 'test.cu4sue7kfpkm.ap-northeast-2.rds.amazonaws.com',
  user: 'widim',
  password : 'testtest',
  database : 'first'
})

module.exports = pool;