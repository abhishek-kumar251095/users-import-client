const express = require('express'),
      path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/users-import-client'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/users-import-client/index.html'));
});

app.listen(process.env.PORT || 8080);