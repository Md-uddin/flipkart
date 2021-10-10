import React from "react";
import { navData } from "../../constants/NavData";
import { Box, Typography, makeStyles,} from "@material-ui/core";

const useStyle = makeStyles(theme=>({
    components: {
        display: 'flex',
        margin:'55px 130px 0 130px'
        , padding: '12px 8px',
    justifyContent: 'space-between',
    overflow: 'overlay',
    [theme.breakpoints.down('md')]:{
      margin: 0,
      marginTop:55
    },

  },
    container: {
      textAlign: 'center',
    }
    , image: {
        width:64
    },
    text: {
        fontSize: 11,
        fontWeight:600
    }
}))
const Topbar = () => {
    const classes = useStyle();
  return (
    <div className={classes.components}>
      {navData.map((data) => (
        <Box className={classes.container}>
          <img src={data.url}  className={classes.image} />
          <Typography className={classes.text}>{data.text}</Typography>
        </Box>
      ))}
    </div>
  );
};

export default Topbar;
