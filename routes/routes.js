import express from 'express'
const router = express.Router();
import { userSignup,userLogin } from '../controllers/user-controller.js'
import {getProducts,getProductById} from '../controllers/Products-controllers.js'
import{ addPaymentGateway,paymentResponse} from '../controllers/Payment-controle.js'

router.post('/signup', userSignup);
router.post('/login',userLogin)

//for home page
router.get('/products', getProducts)
//for product details
router.get('/product/:id', getProductById);

//payment gatway 
router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);//for paytm response callback
export default router; 