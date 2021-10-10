import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import { v4 as uuid } from 'uuid';
//components
import connection from './database/connection.js';
import DefaultData from './default.js'
import cors from 'cors'
import Routes from './routes/routes.js'
dotenv.config();

const PORT = process.env.PORT || 8000;
const URL = 'mongodb+srv://uddin786:uddin786@cluster0.gt755.mongodb.net/flipkart?retryWrites=true&w=majority';
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', Routes);

connection(process.env.MONGOODB_URI || URL);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.listen(PORT, () => console.log(`server is running at ${ PORT }`))

// default deta to database
DefaultData();

//PAYTM
export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID '] = process.env.PAYTM_CHANNEL_ID ;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] ='http://localhost:8000/callback';
paytmParams['EMAIL'] = 'uddin@mduddin.website';
paytmParams['MOBILE_NO'] = '1234567980';