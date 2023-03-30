const express = require("express");
const bodyParser = require("body-parser");
const cors= require('cors');
const app = express();
const PORT = 5005;

app.use(cors()); // cors to communicate between frontend and backend
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let currColor = "#FFFFFF";


app.post("/changeColor", (req, res) => {
      const newColor = req.body.newColor;
      console.log(req.body);
      console.log(newColor);
      currColor = newColor;
      res.send(`Color changed to ${currColor}`);
});

app.get("/currColor", (req, res) => {
      console.log(currColor);
      console.log("Color Change Requesting.....");
      res.send({ currColor: currColor });
});

app.listen(PORT, () => {
      console.log(`Server is live on port ${PORT}`);
});