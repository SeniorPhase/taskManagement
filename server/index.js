const express = require("express");
const cors = require("cors");
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
  res.send({ data: 10 });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
