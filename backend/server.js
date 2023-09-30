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

app.put('/:tb', (req, res) => {
  const { id, fieldName, value } = req.body;
  const tb = req.params.tb;

  const sql = `UPDATE ${tb} SET ${fieldName} = ? WHERE id = ?`;
  const values = [value, id];

  db1.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    return res.json("Success");
  });
});


app.post('/CSE', (req, res) => {
  const { name, email, subject, code, phone, address, gender, experience,tb } = req.body;
  const tableName = `${tb.toLowerCase()}`;
  const sql = `INSERT INTO ${tableName} (name, email, subject, code, phone, address, gender, experience) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [name, email, subject, code, phone, address, gender, experience];
  
  db1.query(sql, values, (err, data) => {
    if (err) {
      console.log(err); // Log the error for debugging purposes
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.get('/:tb', (req, res) => {
  const tb = req.params.tb; // Access the table name from the request parameters
  const sql = `SELECT * FROM ${tb} ORDER BY subject ASC`;

  db1.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    return res.json(data);
  });
});


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'signup',
  port: 3306,
});

app.post('/signup', (req, res) => {
  const { name, email, password, userType } = req.body;

  const tableName = `${userType.toLowerCase()}`;

  const sql = `INSERT INTO ${tableName} (name, email, password) VALUES (?, ?, ?)`;
  const values = [name, email, password];

  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.post('/login', (req, res) => {
  const { email, password, userType } = req.body;

  const tableName = `${userType.toLowerCase()}`;

  const sql = `SELECT * FROM ${tableName} WHERE email = ? AND password = ?`;
  const values = [email, password];

  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Fail");
    }
  });
});

app.listen(8081, () => {
  console.log("listening");
});
