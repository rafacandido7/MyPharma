const express = require ('express');
const {index, create, details, forget, update} = require ('./controllers/produtos.controller.js');
const routes = express.Router();


//Para listar todos os produtos.
routes.get('/', index);


//Rotas dos Produtos.
routes.post('/create_product', create);
routes.get('/product_details/:_id', details);
routes.delete('/delete_product/:_id', forget);
routes.put('/update_product', update);



module.exports = routes;
