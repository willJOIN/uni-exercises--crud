const express = require("express");
const port = 8080;
const app = express();

app.use(express.json());

app.get("/users", function(req, res){
    res.json({
        "id": 1,
        "nome": "William"
    })
})

app.listen(port, function(){
    console.log("API rodando na porta " + port);
})