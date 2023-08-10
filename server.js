const express = require ('express');

const app = express();


app.get('/', (request, response)=>{
        response.send("Ola mundo de humanos sem coração");
})

app.listen(8000, ()=>{
    console.log ("Abrindo o servidos da AnaEEscura 🐌🐌");
})