
import Product from '../models/productSchema.js'


export const getProducts = async (req,res) => {
    try {
     let products =   await Product.find({})//for whole data keep blank
    res.json(products)
    } catch (err) {
        console.log(err.message)
     
    }
}
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ 'id': req.params.id }) //to get product from id in userLogin
    console.log('working')
    res.status(201).json(product)
    console.log(product)
  } catch (err) {
    console.log(err)
  }
}