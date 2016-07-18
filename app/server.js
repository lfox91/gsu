const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.render(index);
});

app.listen(process.env.PORT || 3000, function(){
  console.log('listening on port 3000');
});
