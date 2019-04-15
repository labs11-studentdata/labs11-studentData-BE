require('dotenv').config()
const { server } = require("./api/server");
// const express = require("express");
const PORT = process.env.PORT || 9000;

 server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


 // Updating arbitrary comment to trigger env var update.