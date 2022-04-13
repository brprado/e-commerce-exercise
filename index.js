const express = require("express");
const exphbs = require("express-handlebars");
const port = 3000;

const app = express();

//deifnindo handlebars como nossa template engine
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

//middlewares
app.use(express.static("public"));

const produtos = [
  { name: "Notebook gamer", price: 5499.99, category: "eletronicos", id: "1" },
  { name: "Calculadora", price: 199.99, category: "eletronicos", id: "2" },
  { name: "Chocolate", price: 10.98, category: "alimentos", id: "3" },
  { name: "Caixa de som", price: 500.99, category: "som", id: "4" },
  {
    name: "Marcador de texto",
    price: 5.97,
    category: "materiais escolares",
    id: "5",
  },
];

//rotas
app.get("/", (req, res) => {
  res.render("home", { produtos });
});

//criando uma url dinamica
app.get("/produto/:id", function (req, res) {
  const produto = produtos[parseInt(req.params.id) - 1];

  res.render("produto", { produto });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
