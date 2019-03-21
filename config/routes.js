module.exports = server => {
  server.get("/", root);
};

const root = (req, res) => {
  res.status(200).send("Hello, World!\nLabs 11 studentdata");
};
