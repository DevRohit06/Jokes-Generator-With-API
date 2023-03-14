const express = require('express');
const body_parser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const index = require('./jokes.json');

const app = express();

function search(type){
    let data = index.filter(response => response.type === type)
    let joke = data[Math.floor(Math.random() * data.length)];
    if(joke){
        return joke;
    }else {
        return "No jokes found"
    }
}
function joke(){
    let joke = index[Math.floor(Math.random() * index.length)];
    return joke;
}
app.use(helmet());
app.use(body_parser.json());
app.use(cors())
app.use(morgan("combined"));
app.get("/", (req, res) => {
    res.send("hello world");
});
app.get("/joke", (req, res) => {
    res.send(joke());
})
app.get("/:types", (req, res) => {
    let type = req.params["types"];
    let ran = search(type);
    res.send(ran);
})
app.listen(3000, () => {
    console.log("Server listening on port 3000");
})
module.exports = app
