const express = require("express");
const rentalRoute = require("./routes/rental");
const userRoute = require("./routes/user");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/user", userRoute);
app.use("/rental",rentalRoute);

app.listen(PORT,() => {
    console.log(`Server listening on port ${PORT}`);
});