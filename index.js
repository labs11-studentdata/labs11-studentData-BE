const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.status(200).send("Hello, World!\nLabs 11 studentdata");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
