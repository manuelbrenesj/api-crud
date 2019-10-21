
const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const productsRoutes = require('./routes/product');


//SETTINGS

app.set('json spaces', 4); //CONFIGURA SALTOS DE LINEA EN EL NAVEGADOR

//MIDDLEWARES

app.use(morgan('dev')) //MUESTRA POR CONSOLA LOS MSJS DE GET/.. POST/.. ETC
app.use(bodyParser.json()); //ENTENDER DATOS QUE SE ENVIAR ATRAVES DE POSTMAN
app.use(bodyParser.urlencoded({extended: false})); 

//ROUTES

app.use('/products', productsRoutes); //RUTAS EN ARCHIVOS POR SEPARADO

//STATIC FILES

//START SERVER

app.listen(3000, () => {
    console.log('Server on port', 3000);
});