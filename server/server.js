const express = require("express"); //import express module
const app = express(); //use express to create app
const port = 8000; //optional port pick localhost://8000

require("./config/mongoose.config"); //require config/mongoose to allow use of Mongoose to connect to database

app.use(express.json(), express.urlencoded({ extended: true })); 
//use json and urlencoded that allows us to use a post request and pass it through

//make server require routes/jokes.routes and give the app imported line 2 access to them 
const AllMyJokeRoutes = require("./routes/jokes.routes");
AllMyJokeRoutes(app);

//localhost://8000/ is request
//sends response of json object
app.get("/", (req, res) => {
    res.json({ message: "Hello World!" });
    });

app.listen(port, () => console.log(`Listening on port: ${port}`));