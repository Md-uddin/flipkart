import { Card, makeStyles, Box, Typography, Button } from "@material-ui/core";
import clsx from "clsx";
//
import GroupButtons from './GroupButton'
const useStyle = makeStyles(theme=>({
  component: {
    marginTop: 55,
    display: "flex",
    borderRadius: 5,
        Background: "#878787",
        borderTop: '1px solid #f0f0f0',
    textAlign: 'left',
    width: `110%`,
    borderRadius: 0,
    height: 250,
    [theme.breakpoints.down('md')]: {
      height: `100%`,

    }
    
  },
  leftComponent: {
    margin: 20,
    display:'flex'
   ,flexDirection:'column',
    },
    RightComponent: {
      margin:10
  },
  smallText: {
    fontSize: 14,
  },
  grey: {
    color: "#878787",
    },
    button: {
        marginTop: 20,
      fontSize: 16,
      [theme.breakpoints.down('md')]: {
        margin:0
      }
  }, image: {
      width: `60%`,
      height: `50%`,
  
      
  }
}));
const CardItem = ({ item , removeItemFromCart }) => {
  const classes = useStyle();
  console.log("here in carditems");
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  return (
    <Card className={classes.component}>
          <Box className={classes.leftComponent}>
        <img src={item.url} className={classes.image} />
        <GroupButtons/>
          </Box>
      <Box className={classes.RightComponent}>
        <Typography>{item.title.longTitle}</Typography>
        <Typography
          style={{ marginTop: 10 }}
          className={clsx(classes.smallText, classes.grey)}
        >
          Seller:SuperconNet
          <span>
            <img src={fassured} style={{ width: 50, marginLeft: 10 }} />
          </span>
              </Typography>
              <Typography style={{margin:`20px 0`}} >
                  <span style={{fontSize:20,fontWeight:600}}>${item.price.cost}</span> &nbsp; &nbsp;&nbsp;
                  <span className={classes.grey}> <strike>${item.price.mrp}</strike>${item.price.mrp}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span style={{color:'#388e3c'}}>{item.price.discount}Off</span> &nbsp;&nbsp;&nbsp;&nbsp;
              </Typography>
              <Button className={classes.button} onClick={() => { removeItemFromCart(item.id) }}>remove</Button>
      </Box>
    </Card>
  );
};

export default CardItem;
