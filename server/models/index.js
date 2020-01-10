const mongoose = require("mongoose");
//mongoose.set("debug", true);

mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/warbler", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to database"))
    .catch(err => console.error(err));

module.exports.User = require("./user");
module.exports.Message = require("./message");
