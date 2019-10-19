
const { products } = require('../db.json');

module.exports = {
    
    getProduct: (req,res) => {
        res.json({products}) //ES IGUAL QUE = ({products: products})
    },
    
    addProduct: (req,res) => {
        const { name } = req.body;
        products.push({
            id: products.length, //ME AGREGA EL ID AUTOMATICO
            name
        })
        res.json({ //MENSAJE DE RECIVIDO EN POSTMAN
            'success': true,
            'msg': 'seccessfully added'
        });
    },

    updateProduct: (req,res) => {
        const { id } = req.params;
        const { name } = req.body;

        //BUSCA EN EL ARREGLO DE PRODUCTOS, UN PRODUCTOS
        products.forEach((product, i) => { 
            if (product.id === Number(id)){
                product.name = name;
            }
        });
        res.json({
            'success': true,
            'msg': 'updated'
        })
    },

    deleteProduct: (req,res) => {
        const { id } = req.params;

        //BUSCA EN EL ARREGLO DE PRODUCTOS, UN PRODUCTOS
        products.forEach((product, i) => { 
            if (product.id === Number(id)){
                products.splice(i, 1);
            }
        });
        res.json({
            'success': true,
            'msg': 'deleted'
        })
    }

};