// [START app]
'use strict';

const express = require('express');
const app = express();
var path = require('path');
//------------------------------------------------------------------------------
app.set('trust proxy', true);

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile('public/html/index.html' , { root : __dirname});
});

app.get('/*', (req, res) => {
  res.sendFile('public/html/404.html' , { root : __dirname});
});

//------------------------------------------------------------------------------
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]
//------------------------------------------------------------------------------
