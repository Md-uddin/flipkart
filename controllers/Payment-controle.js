import paytmChecksum from '../paytm/PaytmChecksum.js'
import { paytmMerchantKey, paytmParams } from '../server.js';
import formidable from 'formidable';
// import { verifySignature } from '../paytm/PaytmChecksum.js';
import https from 'https';


 export const addPaymentGateway =async  (req,res) => { //PAYTM PARAMS & MERCHENT KEY
    let paytmChecksums = await paytmChecksum.generateSignature(paytmParams, paytmMerchantKey)
     console.log('working from controller');

    try {
        let params = {
            ...paytmParams,'CHECKSUMHASH':paytmChecksums
        }
        res.json(params)
        console.log('working from controller')
  } catch (err) {
      console.log(err.message + 'from controller')
  }
}



export const paymentResponse = (req,res) => {
    const form = new formidable.IncomingForm();
    let paytmChecksum = req.body.CHECKSUMHASH;
    delete req.body.CHECKSUMHASH;

    let isVerify = paytmChecksum.verifySignature(req.body, 'bKMfNxPPf_QdZppa', paytmChecksum)
    if (isVerify) {
paytmParams['MID'] = req.body.MID;
paytmParams['ORDERID'] = req.body.ORDERID;
        paytmChecksum.generateSignature(pautmParams, 'bKMfNxPPf_QdZppa').then(function (checksum) {
            paytmParams['CHECKSUMHASH'] = checksum;
            let post_data = JSON.stringify(paytmParams);
            let option = {
                hostname: 'securegw-stage.paytm.in',
                port: 443,
                path: '/order/status',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length':post_data.length
                }
            
            }
            let response = '';
        let post_req =     https.req(option, function (post_res){
                post_res.on('data', function (chunk) {
                    response += chunk;
                })
                post_res.on('data', function () {
                    let result = JSON.parse(response);
                    res.redirect('http://localhost:3000')
                })
            })
            post_req.write(post_data);
            post_req.end();
  })
        
    } else {
        console.log('checksum mismatch')
    }
}