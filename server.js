const express = require('express');
const app = express();
const lorem = require('lorem-ipsum');
var output = lorem({count:3, units:'paragraph'});

app.get('/lorem/:id', function(req, res){
    var id = req.params.id;
    output = lorem({count:id, units:'paragraph'});
    res.send(output);
});
app.get('/lorem', function(req, res){
    res.send(output);
});

app.listen(3000, function(){
    console.log('server is up and running on port 3000');
});