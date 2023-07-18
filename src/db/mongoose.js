const mongoose = require("mongoose.js");

mongoose.connect(process.env.dbURL);

mongoose.connection.on('error', err => {
    console.log("Unable to connect");
});