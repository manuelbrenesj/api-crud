
const express = require('express');
const router = express.Router();

const { 
    getProduct, 
    addProduct,
    updateProduct,
    deleteProduct 
    } = require('../controllers/product');

router.route('/').get(getProduct)
router.route('/').post(addProduct);
router.route('/:id').put(updateProduct)
router.route('/:id').delete(deleteProduct)

module.exports = router;