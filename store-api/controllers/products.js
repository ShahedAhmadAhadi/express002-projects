const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    console.log('object')
    const products = await Product.find({})
    res.status(200).json({products, nbHits: products.length})
}
const getAllProducts = async (req, res) => {
    const {featured, company, name, sort, fields } = req.query
    const queryObject = {}
    if(queryObject) {
        queryObject.featured = featured === 'true' ? true: false
    }
    if(company) {
        queryObject.company = company
    }
    if(name) {
        queryObject.name = {$regex: name, $options: 'i'}
    }
    let result = Product.find(queryObject)
    if(sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }else{
        result = result.sort('createdAt')
    }
    if(fields){
        const fieldList = sort.split(',').join(' ')
        result = result.select(fieldList)
    }

    const page = +(req.query.page) || 1
    const limit = +(req.query.limit) || 10
    const skip = (page - 1) * limit
    result = result.skip(skip).limit(limit)
    const products = await result
    res.status(200).json({mas: 'products route', products, nbHits: products.length})
}

module.exports = {
    getAllProducts, getAllProductsStatic
}

