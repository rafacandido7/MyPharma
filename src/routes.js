const express = require ('express');
const {create, index, details, forget, update} = require ('./controllers/produtos.controller.js');
const routes = express.Router();

routes.get('/', index);


//Rotas de Produtos
routes.post('/create_product', create);
routes.get('/product_details/:_id', details);
routes.delete('/delete_product/:_id', forget);
routes.put('/update_product', update);



module.exports = routes;
