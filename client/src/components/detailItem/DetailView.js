import {
  Box,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../redux/actions/ProductAction";
import clsx from "clsx";
import { withRouter } from "react-router";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

//component 
import ActionItems from "./ActionItems";

const useStyle = makeStyles(theme=>({
  component: {
    marginTop: 55,
    background: "#f2f2f2",
 
    
  },
  container: {
    margin: "0",
    display: "flex",
    flexDirection: "row",
    background: "white",
    width: `80%`,
    [theme.breakpoints.down('md')]: {
      width: `100%`,
      display: 'flex',
      justifyContent:'center'
      
    }
  },
  rightContainer: {
    textAlign: "left",
    marginTop: "50px",
    [theme.breakpoints.down('md')]: {
      marginLeft:20
    }
   
  },
  small: {
    fontSize: 14,
      marginTop: 10,
    verticalAlign:'baseline'
  },
  grey: {
    color: "#878787",
  },
  price: {
    fontSize: 24,
    fontWeight: 500,
  },
  badge: {
    fontSize: 14,
    marginRight: 10,
    color: "#00cc00",
  },
  leftComponent: {
    display: 'grid',
    placeItems: 'center',
    [theme.breakpoints.down('md')]: {
      marginRight:30
    }
  }
}));

const DetailView = ({ match }) => {
  //match is a by default params which functiions already has more:history

  const classes = useStyle();
  const sellerURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000); // to get five days after
  const { product } = useSelector((state) => state.getProductDetails);

  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
    console.log("run from details");
  }, [dispatch]);
  // let con = JSON.parse(product);
  console.log(product + "from detail view");

  return (
    <div className={classes.component}>
      {product &&
        Object.keys(product).length && ( //checking if there is a value in product then render because return render before useEffect
        <Grid container className={classes.container}>
          <Grid item lg={4} md={4} sm={8} xs={12} className={classes.leftComponent}>
                  <Box style={{ minWidth: "40%" }}><ActionItems product={product}/></Box>
      </Grid>
            <Grid  item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
              <Typography>{product.title.longTitle}</Typography>
              <Typography className={clsx(classes.small, classes.grey)}>
                8 ratings and 1 reveiw
                <span>
                  <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
                </span>
              </Typography>
              <Typography>
                <span className={classes.price}>${product.price.cost}</span>{" "}
                &nbsp;&nbsp;&nbsp;
                <span className={classes.grey}>
                  <strike>${product.price.mrp}</strike>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span style={{ color: "#388e3c" }}>
                  {product.price.discount}Off
                </span>
              </Typography>
              {/* bank offers  */}
              <Box className={classes.small}>
                <Typography style={{marginTop:20,fontWeight:600}}> Available offers</Typography>
                <Typography>
                  <LocalOfferIcon className={classes.badge} /> Special PriceGet
                  extra 14% off (price inclusive of discount)T&C{" "}
                </Typography>
                <Typography>
                  <LocalOfferIcon className={classes.badge} />
                  Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit
                  CardT&C
                </Typography>
                <Typography>
                  <LocalOfferIcon className={classes.badge} />
                  Bank Offer20% off on 1st txn with Amex Network Cards issued by
                  ICICI Bank,IndusInd Bank,SBI Cards and MobikwikT&C
                </Typography>
                <Typography>
                  <LocalOfferIcon className={classes.badge} />
                  Bank Offer10% Off on Bank of Baroda Mastercard debit card
                  first time transaction, Terms and Condition applyT&C
                </Typography>
              </Box>
              <Table>
                <TableBody>
                  <TableRow className={classes.small}>
                    <TableCell className={classes.grey}>Delivery</TableCell>
                    <TableCell>{date.toDateString()}</TableCell>
                  </TableRow>
                  <TableRow className={classes.small}>
                    <TableCell className={classes.grey}>Warranty</TableCell>
                    <TableCell>No Warranty</TableCell>
                  </TableRow>

                  <TableRow className={classes.small}>
                    <TableCell className={classes.grey}>Seller</TableCell>
                    <TableCell >
                      <span style={{ color: `#2874f0` }}>SuperconNet</span>
                      <Typography  className={classes.small}>GST innvoice Available</Typography>
                      <Typography className={classes.small}>14 Days Return Policy</Typography>
                      <Typography className={classes.small}>
                        View more sellers starting from $300
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>
 
                      {/*for 2 column into 1*/}
                                      <img src={sellerURL} style={{width:300}}/>
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.small}>
                    <TableCell className={classes.grey}>Description</TableCell>
                    <TableCell>{product.description}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        )}
    </div>
  );
};

export default DetailView;
