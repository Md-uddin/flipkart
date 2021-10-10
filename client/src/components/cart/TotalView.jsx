import { Box,Card,makeStyles, Typography } from "@material-ui/core"
import { useState, useEffect,useContext } from "react";
import CheckPayment from "../payment/CheckPayment";
import clsx from 'clsx'
import { TotalContext } from "../../context/ContextProvider";

const useStyle = makeStyles(theme => ({
    component: {
        width: 350,
        marginLeft: 20,
        marginTop: 55,
        height: `80%`,
        [theme.breakpoints.down('md')]: {
            width: `60vw`,
            marginTop: 75,
            height:`90%`
        },
        [theme.breakpoints.down('sm')]: {
            width: `70vw`,
            marginTop: 75,
            height:`90%`
          }
    },
    header: {
        padding: 14,
        fontSize: 18,
        fontWeight: 600,
        borderBottom: '1px solid #f0f0f0'
    },
    container: {
        padding: 15,
        '& > *': {
            marginTop: 40,
            fontSize: 14,
            width: `100%`,
            textAlign: 'left'
        },
   
    }, greyText: {
        color: "#878787",
        fontSize: 18
    }
    , price: {
        display: 'flex',
        justifyContent: 'space-between'


    }, total: {
        borderTop: '1px dashed #e0e0e0',
        borderBottom: '1px dashed #e0e0e0',
        padding: '20px 0',
        fontSize: 18,
        fontWeight: 600,
        marginTop: 60
        
    }, invisible: {
        display:'none'
    }

}));
const TotalView = ({ cartItems, }) => {
    const classes = useStyle();
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    
    // const {total,setTotal} = useContext(TotalContext)
    useEffect(() => {
        totalAmount();
    }, [cartItems])

    const totalAmount = () => {
        let price =0, discount = 0;
        cartItems.map(item => {
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost)
        })
        setPrice(price);
        setDiscount(discount);
    }
    // const total = price - discount + 40;
    // value(price);
    return (
        <Box>
        <Card className={classes.component}>
            <Box className={classes.header}>
                <Typography className={classes.greyText}>Price Details</Typography>
            </Box>
            <Box className={classes.container}>
                <Typography className={classes.price}>Price({cartItems.length}) <span >{price}</span></Typography>
                <Typography className={classes.price}>Discount <span>-${discount}</span></Typography>
            <Typography className={classes.price}>Dilevery Charges <span>$40</span></Typography>
                <Typography className={clsx(classes.price,classes.total)} 
                >Total Amount <span>${price -discount + 40}</span></Typography>
                <Typography style={{color:'green'}}>You will save ${discount - 40}</Typography>
              
            </Box>
            </Card>
            </Box>
    )
}

export default TotalView
