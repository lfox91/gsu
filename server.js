const express = require('express');
const app = express();
var path = require('path');


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 3000, function(){
  console.log('listening on port 3000');
});
