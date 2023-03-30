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

app.put("/users", (req, res) => {
    const { id, nome } = req.body;
    const usuario = usuarios.find((user) => user.id == id);

    if (!usuario) {
      res.status(404).json({ msg: "registro não encontrado" });
    } else {
      usuario.nome = nome;
      res.status(200).json({ msg: "usuário atualizado" });
    }
});
  
app.delete("/users/:id", (req, res) => {
    const {id} = req.params;
    const usuario = usuarios.find( user => user.id == id)
    
    if (!usuario) {
      res.status(404).json({ msg: "registro não encontrado" });
    } else {
      usuarios.splice(0, 1, id);
      res.status(200).json({ msg: "usuário excluido" });
    }
});

app.listen(port, function(){
    console.log("API rodando na porta " + port);
})