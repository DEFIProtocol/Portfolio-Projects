const express = require('express');
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');
const auth = require("./routes/user");

// connect DB 
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("mongoDB is connected"))
    .catch((err) => console.log(err))

app.use(cors());
app.use(express.json());

app.use("/vibranium", auth);

const PORT = process.env.Port || 5000;

app.listen(PORT, () => console.log("Server is running!"))
