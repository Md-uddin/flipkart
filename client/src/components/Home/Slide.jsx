import React from "react";
import{ Link} from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { products } from "../../constants/NavData.js";  initially taking data from constants directly
import { Box, Button, Divider, makeStyles, Typography } from "@material-ui/core";
import Countdown from 'react-countdown'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const UseStyles = makeStyles(theme => ({
  component: {
    marginTop: 15,
    background: '#fff',
    padding: 32,
    [theme.breakpoints.down('sm')]: {
      height: 195,
      padding:0
     }
  }
  ,
  image: {
    height: "150px",
    [theme.breakpoints.down('sm')]: {
      height:'100px'
     }
  },
  dealtext: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: '32px',
    marginRight: 25
    , [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      wordSpacing: -1,
      // width:`10%`
    }
  },
  timer: {
    color: '#7f7f7f',
    marginLeft: '10',
    display:'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
      height: 10,
    
    }
  },
  deal:{
    display: 'flex',
    margin:10
  },
  button: {
    marginLeft: 'auto',
    background: '#2874f0'
    , borderRadius: 2,
    color: 'white',
    fontSize: 13,
    marginRight: 10,
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
      height:`8%`
    }
  }
  , text :{
  fontSize: 14,
    marginTop: 5,
    textDecoration: 'none',
    listStyle:'none'
  }, timer: {
    [theme.breakpoints.down('sm')]: {
      display:'none'
    }
  },
  obj: {
    margin: 0,
    padding:0,
  }
}));



const Slide = ({timer,title,products}) => {
  const classes = UseStyles();
  
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
  const renderer = ({hours,minutes,seconds}) => {
    return <span>{hours} : {minutes} : {seconds} left</span>
  }
  return (
    <div>
      <Box className={classes.deal}>
      <Typography  className={classes.dealtext}>
       {title}
        </Typography>
        {timer && 
          <Box className={classes.timer}>
        <img src={timerURL} styles={{ width: 24 }} />
           <Countdown date={Date.now() + 5.04e+7} renderer={renderer} className={classes.timer} />
       
      </Box>}
      <Button variant='contained' primary className={classes.button}>view all</Button>
      </Box>
      <Divider/>
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        showDots={false}
        // removeArrowOnDeviceType={["mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        className={classes.component} >
        {products.map((elm) => {
          console.log(elm)
           return(
          <Link to={`product/${ elm.id }`} className={classes.obj} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div>
              <img src={elm.url} className={classes.image} />
              <Typography className={classes.text} style={{ fontWeight: 600 }}>{elm.title.shortTitle}</Typography>
              <Typography className={classes.text} style={{ color: 'green' }}>Save upto  {elm.price.discount}</Typography>
              <Typography className={classes.text} style={{ color: '#212121' }}>{elm.tagline}</Typography>
            </div>
            </Link>
           )
        })}
      </Carousel>
    </div>
  );
};

export default Slide;
