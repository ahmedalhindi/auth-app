const config = require('config')
const app = require("./app");
const db = require("./db");

if(!config.get("jwtKey")) {
    console.log("FATAL ERROR: jwtKey is not defined")
    process.exit(1)
}

db.connect()

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Express on port `+ port));
