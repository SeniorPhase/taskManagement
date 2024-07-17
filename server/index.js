const express = require("express");
const cors = require("cors");
const db = require("../server/models/index.js");
const PORT = 3000;
const app = express();

// const router = require('./routes/routes.js')

app.use(express.json());
app.use(cors());
app.get("/test", (req, res) => {
  res.send({ data: 10 });
});
// app.use('/api',router)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
