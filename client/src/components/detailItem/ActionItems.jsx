import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { useSElector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/Cartaction";
import { payUsingPaytm } from "../../service/api";
//component
import { post } from "../../utils/paytm";

const useStyle = makeStyles(theme=>({
  leftContainer: {
    padding: "40px 0 0 80px",
    [theme.breakpoints.down('md')]: {
      padding: "20px 0 0 20px",

    }
  },
  image: {
    width: `95%`,
    padding: `40px 20px`,
    border: "1px soid #f0f0f0",
  },
  button: {
    height: 50,
    width: `46%`,
    marginRight: 10,
    borderRadius: 5,
    [theme.breakpoints.down('md')]: {
      width: `40%`,
      maxHeight: `20%`,
      fontSize:12
    }
  },
}));
const ActionItems = ({ product }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();

  const addItemsToCart = (id) => {
    dispatch(addToCart(id));
    history.push(`/cart`);
  };
  //for paytm payment gateway
  // const buyNow = async () => {
  //   console.log("inside action");
  //   let response = await payUsingPaytm({
  //     amount: 500,
  //     email: "mduddin@gmail.com",
  //   });
  //   let information = {
  //     action: `https://securegw-stage.paytm.in/order/process`,
  //     params: response,
  //   };
  //   console.log("inside action still and still");
  //   post(information);
  // };

  return (
    <div className={classes.leftContainer}>
      <img src={product.url} alt="product image" className={classes.image} />
      <Button
        variant="contained"
        className={classes.button}
        style={{ background: "#ff9f00", color: "#fff" }}
        onClick={() => {
          addItemsToCart(product.id);
        }}
      >
    
        <ShoppingCartIcon />
        Add to Cart
      </Button>
      <Link to="/payment" style={{textDecoration:'none'}}>
      <Button
        variant="contained"
        className={classes.button}
        style={{ background: "#fb641b", color: "#fff" }}
        // onClick={() => {
        //   buyNow();
        // }}
      >
 
        <FlashOnIcon />
        Buy Now
      </Button>
      </Link>
    </div>
  );
};

export default ActionItems;
