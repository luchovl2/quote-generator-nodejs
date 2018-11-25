let express = require("express");
let sqlite = require("sqlite3");
let path = require("path");

let app = express();
let db = new sqlite.Database("data/quotes.db");

let port = 3000;

app.use(express.static("public"));

//------------------------------------
app.get("/", (req, res) => {
});

//-------------------------------------
app.get("/quote", (req, res) => {
    db.get("SELECT * FROM quotes ORDER BY RANDOM() LIMIT 1", (err, row) => {
        if (err) {
            res.send("Error: " + err.message);
            console.log(err);
        }
        else {
            res.json(row);
            console.log("respondiendo: ", row);
        }
    });
})

//------------------------------------
app.listen(port, () => {
    console.log("Listening in port " + port);
})