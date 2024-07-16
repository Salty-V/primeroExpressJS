const express = require('express');
const app = express();
const port = 3333;

const products = require('./mock-products');

app.get('/api/products', (req, res) => {
   let sentence = 'est le produit'
   products.map((product) => {
    sentence += product.name + ' '
   })
    console.log(`Je viens de faire une requête get sur mon app`)
    res.send(sentence)
});

app.get('/api/products/:id', (req, res) => {
    // Afficher le nom du produits qui correspond à l'id en paramètre
    console.log(products[0].id,req.params.id)
    let myProducts =
    products.find((product) => { return product.id === Number(req.params.id) })
    res.send(`Nom du produit : ${myProducts.name}`)
})

app.listen(port, () => {
    console.log(`L'app sur le port ${port}`);
})
