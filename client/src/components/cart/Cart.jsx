import { Box, Button, Card, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect,useContext } from "react";
import { removeFromCart } from "../../redux/actions/Cartaction";
//components
import CardItem from "./cartItems";
import EmptyCart from "./EmptyCart";
import TotalView from "./TotalView";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
import { Link } from "react-router-dom";


const useStyle = makeStyles(theme=>({
  component: {
    marginTop: 55,
    padding: "30px 135px",
    display: "flex",
        flexDirection: "row",
        width: `100%`,
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      padding: '20px 20px ',

      
    }
  },
  leftcomponent: {
    width: `67%`,
    [theme.breakpoints.down('md')]: {
     width:`100%`
   }
  },
  header: {
    padding: `15px 24px`,
  },
  placeorder: {
    background: "#fb641b",
    color: "#fff",
    borderRadius: 5,
    width: 250,
    height: 50,
    display: "flex",
    marginLeft: "auto",
    marginRight: 10,
    [theme.breakpoints.down('md')]: {
     width:`40%`
   }
  },
  buttomcomponent: {
    width:`110%`,
    [theme.breakpoints.down('md')]: {
      width: `110%`,
      paddingTop:10
     }
  }, rightcomponent: {
    [theme.breakpoints.down('md')]: {
      width: `100%`,
      display: 'grid',
      placeItems:'center'
    }
  },

    
}
 
));
const Cart = () => {
  const classes = useStyle();

  const dispatch = useDispatch();
  

  const { cartItems } = useSelector((state) => state.Cart);
  console.log(cartItems);

  useEffect(() => {
    console.log(cartItems);
  }, []);

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  const value = (price) => {
    console.log(price +'from props gitchy')
  }
  // for paytm payment gateway redirect
//   const buyNow = async () => {
//     console.log('inside action')
//     let response = await payUsingPaytm({ amount: 500, email: 'mduddin@gmail.com' })
//     let information = {
//         action: `http://securegw-stage.paytm.in/order/process`,
//         params:response
//     }
//     console.log('inside action still and still')
//     post(information);
// }
  return (
    <div>
      {cartItems.length ? (
        <Grid container className={classes.component}>
          <Grid item lg={8} ml={8} sm={11} xs={11} className={classes.leftcomponent}>
            <Box className={classes.header}>
              <Typography className={classes.mycart}>
                My Cart({cartItems.length})
              </Typography>
            </Box>
            <Box>
              {cartItems.map((item) => {
                return (
                  <CardItem
                    item={item}
                    removeItemFromCart={removeItemFromCart}
                  />
                );
              })}
              <Card className={classes.buttomcomponent}>
                <Link to='/payment' style={{listStyle:'none',textDecoration:'none'}}>
                <Button variant="contained" className={classes.placeorder} //onClick={()=>{buyNow()}}
                >
                  Place order
                </Button>
                </Link>
              </Card>
                      </Box>
                      </Grid>
            <Grid item lg={3} ml={3} sm={11} xs={11}className={classes.rightcomponent}>
            <TotalView cartItems={cartItems}/>
            </Grid>
         
        </Grid>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
