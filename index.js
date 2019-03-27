require('dotenv').config()
const { server } = require("./api/server");
const fs = require('fs');
const https = require('https');
// const express = require("express");
const PORT = process.env.PORT || 9000;

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, server).listen(PORT, () => console.log(`Server running on port ${PORT}`));
