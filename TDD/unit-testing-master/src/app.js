const Express       = require('express');
const App           = Express();

App.get('/', function(req, res){
    res.send("<h1>Hello Unit Testing</h1>"); 
});

App.listen(3000, function(){
    console.log('Unit Testing Demo');
});