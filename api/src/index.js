const app = require("./app");
const db = require("./db");

db.connect()

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Express on port `+ port));
