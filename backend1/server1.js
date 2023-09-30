const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db1 = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'CSE',
  port: 3306,
});



app.get('/sem3', (req, res) => {
  const sql = "SELECT * FROM sem3 WHERE chairman==1 OR papersetter=1";

  db1.query(sql, (err, data) => {
    if (err) {
      console.log(err); // Log the error for debugging purposes
      return res.json("Error");
    }
    return res.json(data);
  });
});


app.listen(8082, () => {
  console.log("listening");
});
