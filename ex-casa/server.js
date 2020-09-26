const express = require("express");
const app = express();
const porta = 3000;
const women = require('./women.json');

app.listen(3000, function(){
    console.log("Servidor rodando")
});

app.use(express.json());

app.get('/women', function(require, response){
    response.json(women);
});

app.get('/women/:id', function(require, response){
    const {id} = require.params;
    const woman = women.find(woman => woman.id == id);
    
    if (!woman){
        return response.status(204).json();
    }
    response.json(woman);
    
});

