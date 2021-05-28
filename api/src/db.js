const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL || "mongodb://localhost/db";

const connect = async () => {
  await mongoose.connect(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("MongoDB on " + dbUrl);
};

const close = () => mongoose.connection.close();

module.exports = { connect, close, url: dbUrl };
