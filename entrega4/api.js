const {Router} = require('express')
const {updateProduct, deleteProduct, allArray, addProduct, viewProduct} = require('./controller')

const router = Router()

router.get('/', allArray)

router.post('/', addProduct)

router.get('/:id', viewProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

module.exports = router;