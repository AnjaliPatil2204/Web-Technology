const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "studentdb",
  port: 3307
});

db.connect((err) => {
  if (err) {
    console.log("Connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.get("/", (req, res) => {
  res.send("Server running");
});

// ✅ CREATE (Insert Student)
app.post("/students", (req, res) => {
    console.log("Request Body:", req.body);

    const { name, age, course } = req.body;

    const sql = "INSERT INTO students (name, age, course) VALUES (?, ?, ?)";

    db.query(sql, [name, age, course], (err, result) => {
        if (err) {
            console.log("Insert Error:", err);
            res.status(500).send(err);
        } else {
            console.log("Inserted:", result);
            res.send("Student added successfully");
        }
    });
});


// ✅ READ (Get All Students)
app.get("/students", (req, res) => {
    db.query("SELECT * FROM students", (err, result) => {
        if (err) {
            console.log("Fetch Error:", err);
            res.status(500).send(err);
        } else {
            res.send(result);
        }
    });
});


// ✅ UPDATE Student
app.put("/students/:id", (req, res) => {
    const { name, age, course } = req.body;
    const { id } = req.params;

    const sql = "UPDATE students SET name=?, age=?, course=? WHERE id=?";

    db.query(sql, [name, age, course, id], (err, result) => {
        if (err) {
            console.log("Update Error:", err);
            res.status(500).send(err);
        } else {
            res.send("Student updated successfully");
        }
    });
});


// ✅ DELETE Student
app.delete("/students/:id", (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM students WHERE id=?", [id], (err, result) => {
        if (err) {
            console.log("Delete Error:", err);
            res.status(500).send(err);
        } else {
            res.send("Student deleted successfully");
        }
    });
});
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});