const express = require("express");
const port = 8080;
const app = express();
const usuarios = require("./usuarios.json");

app.use(express.json());

app.get("/users", (req, res) => {
    res.status(200).json(usuarios);
})

app.get("/users/:id", (req, res) => {
    const {id} = req.params;
    const usuario = usuarios.find(user => user.id == id);

    if (typeof usuario == "undefined") {
        res.status(404).json({});
    } else {
        res.status(200).json(usuario);
    }
})

app.post("/users", (req, res) => {
    const {id, nome} = req.body;
    usuarios.push({id:id, nome:nome});
    res.status(200).json({msg: "cliente"});
})

// TODO
app.put("/users", (req, res) => {
    const {id, nome} = req.body;
    const usuario = usuarios.find(user => user.id == id);

    if (!usuario) {

    } else {

    }
})

// TODO
app.delete("/users", (req, res) => {})

app.listen(port, function(){
    console.log("API rodando na porta " + port);
})