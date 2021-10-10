import React from "react";
import Carousel from 'react-material-ui-carousel'
import { bannerData } from "../../constants/NavData";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme=>({
  image: {
    width: `100%`,
    height: "280px",
    [theme.breakpoints.down('sm')]: {
      objectFit: 'cover',
      height:180
    }
  },
  carousel: {
    margin: 10,
  },
}));
const Banner = () => {
  const classes = useStyle();
  return (
    <div>
      <Carousel
        autoPlay={true}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
          style: {
            background: "#ffffff",
            color: "#494949",
            borderRadius: "0",
            margin: "0",
          },
        }}
        className={classes.carousel}
      >
        {bannerData.map((img) => (
          <img src={img} className={classes.image} />
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
