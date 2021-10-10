import { products } from './constants/product.js'
import product from './models/productSchema.js';


const DefaultData = async () => {
    try {
        await product.deleteMany({})
        await product.insertMany(products)
        console.log("data imported successfully")
    } catch (err) {
        console.log('error:',err.message)
    }
}
export default DefaultData;