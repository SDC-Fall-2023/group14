// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

var cors = require('cors');
app.use(cors());

app.get( "/api", (req, res) => {  
  res.json({ message: "Message Recieved from API" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});



