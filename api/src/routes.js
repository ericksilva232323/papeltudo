//Dependências - Frameworks
const express = require("express");
const router = express.Router();

const item = require("./controllers/item");

//Rota de teste
const teste = (req, res) => {
    res.json("Back-end, API Lojinha respondendo!");
}

//Rotas de Saída -itens
router.get("/", teste);
router.post("/item", item.create);
router.get("/item", item.read);
router.put("/item/:id", item.update);
router.delete("/item/:id", item.del);

module.exports = router;