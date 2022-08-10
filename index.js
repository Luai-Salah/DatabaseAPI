const express = require('express');

const mysql = require('mysql2');

// Create connection
const database = mysql.createConnection({
    host: "fdb34.awardspace.net",
    user: "4152083_projecte",
    password: "RByW)6/W2#a]H!WZ",
    database: "4152083_projecte",
    port: 3306
});

//Connect
database.connect((err) => {
    if (err)
        throw err;

    console.log("MySQL connect!");
});

const app = express();

app.all('/', (_, res) => {
    console.log("Just got a request!");
    res.send('<h1>Why are you here?<h1>');
});

app.get("/levels/:id", (req, res) => {
    const sql = `SELECT Data FROM levels WHERE ID = ${req.params.id}`;
    database.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result.at(0)["Data"]);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});