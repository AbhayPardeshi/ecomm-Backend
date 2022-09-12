const mongoose = require("mongoose");
require("dotenv").config();

const dbPWD = process.env.DB_PASSWORD;
const dbUser = process.env.DB_USER;

const mongoDBURI = process.env.MONGO_URI;

const mongoURI =
  `mongodb+srv://${dbUser}:${dbPWD}@cluster0.tbhfx1n.mongodb.net/shoePalace` ||
  mongoDBURI;

const connectDB = async () => {
  await mongoose
    .connect(mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("connected to db!"))
    .catch((e) => console.dir(e));
};
module.exports = { connectDB };

// mongodb+srv://Abhay4321:<password>@cluster0.tbhfx1n.mongodb.net/?retryWrites=true&w=majority
