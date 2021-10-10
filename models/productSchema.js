import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    id: String,
    url: String,
    deatilsUrl: String,
    title: Object,
    price: Object,
    description: String,
    descount: String,
    tagline:String
})
const product = mongoose.model("products", productSchema);
export default product