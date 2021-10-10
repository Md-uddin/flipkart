import { Box, Typography, Button, makeStyles, Card } from '@material-ui/core'
import { Link,useHistory } from 'react-router-dom';
import { useState } from 'react';
const useStyle = makeStyles({
    component: {
        width: `100%`,
      height:`100vh`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        
        
    },
    btns: {
        width: 200,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:10
    },
    card: {
        minWidth: `50%`,
        height: `30vh`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
       textAlign:'center',
        justifyContent:'flex-start'
    }
})

const CheckPayment = (prop) => {
    const history = useHistory();
    const classes = useStyle();
    const [paymentdone, setPaymentdone] = useState(false);
    console.log(prop)

    return (
       
        <Box className={classes.component} >
            {
                paymentdone ?
                    <Card className={classes.card}>
                        <Typography style={{fontSize:20,fontWeight:600,marginTop:50}}>
                            Congratulations !
                        </Typography>
                        <Typography style={{fontSize:18,fontWeight:600,margin:10}}>
                           your order has been placed successfully.
                        </Typography>
                        <Typography style={{fontsize:14,color:'green'}}>
                            you won {Math.floor(Math.random() * 15)} superCoins
                        </Typography>
                        <Link to='/' style={{textDecoration:'none'}}>
                        <Button variant='contained' style={{margin:10,height:30, background: "#2874f0", color: 'white' } }  >
                            Shop more
                        </Button>
                        </Link>
                        </Card>
                 :
                    <>
                <Typography style={{fontSize:20,fontWeight:600,margin:10}}>
                Your Total is ${Math.floor(Math.random() * 1000)}
                        </Typography >
                            <Typography style={{
                                fontSize: 16, fontWeight: 400,
                            color:'grey'}}>
                would you like to continue your order
                        </Typography>
                            <Box className={classes.btns}>
                                <Link to ="/cart" style={{textDecoration:'none'}}>
                            <Button variant='contained' style={{width:80,height:40,textDecoration:'none'}} >
                                No
                            </Button>
                            </Link>
                                
                                <Button variant='contained' style={{ width: 80, height: 40, background: "#2874f0", color: 'white' }}
                            onClick={()=>{setPaymentdone(true)}}    >
                                Yes
                            </Button>
                    
                            
                        </Box>
                        </>
            }
      
    </Box>
    )
}

export default CheckPayment
