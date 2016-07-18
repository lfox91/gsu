const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.sendFile('./index.html', function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', './index.html');
    }
  });
});

app.listen(process.env.PORT || 3000, function(){
  console.log('listening on port 3000');
});
