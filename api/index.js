var express = require("express");
var mongoose = require("mongoose");
const http = require('http')
const cors = require('cors')
var app = express();

//environment variables

require('dotenv').config();

//database connection

const url = process.env.ATLAS_URI;
const port = process.env.PORT || 3000


app.use(express.json());
app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
    res.json("Welcome to EKU Backend!!!!!")
})

// require("./routes/index.routes")(app);

const connectionParams={
    useNewUrlParser: true
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


const server = http.createServer(app)


server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})