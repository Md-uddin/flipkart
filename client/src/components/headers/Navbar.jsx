import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import {
  AppBar,
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
  Drawer,
  Menu,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from "react-redux";
import HomeIcon from "@material-ui/icons/Home";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import MoreIcon from "@material-ui/icons/More";
//components
import LoginDialog from "../../login/Login";
import { LoginContext } from "../../context/ContextProvider";
import Profile from "./profile";
import favicon from "./favicon.png";
import Search from "./Search";
const useStyle = makeStyles((theme) => ({
  container: {
    width: `55%`,
    height: `100%`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "45%",
      fontSize: 16,
    },
    [theme.breakpoints.down("xs")]: {
      width: `80%`,
      justifyContent: "space-around",
      // marginLeft:'40px'
    },
  },
  navbar: {
    background: "#2874f0",
    width: `100%`,
    minHeight: 60,
    position: "fixed",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-around",
      width: `100%`,
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-end",
    },
  },
  logotext: {
    display: "flex",
    width: "6rem",
    fontSize: 22,
    fontWeight: 300,
    flexDirection: "column",
    maxHeight: `2rem`,
    letterSpacing: 2,
    [theme.breakpoints.down("md")]: {
      width: "20%",
      fontSize: 16,
    },
    [theme.breakpoints.down("xs")]: {
      width: `30%`,
    },
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    margin: 0,
    padding: 0,
    wordSpacing: 5,
    fontWeight: 200,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 1,
    marginTop: -5,
    color: "yellow",
    [theme.breakpoints.down("xs")]: {
      // width: 18,
    },
  },

  loginBtn: {
    width: `10%`,
    height: `60%`,
    fontSize: 16,
    letterSpacing: 2,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      width: `10%`,
      height: 25,
      fontSize: 12,
      marginLeft: 20,
      marginRight: -20,
      display:'none'
    },
  },
  menuButton: {
    position: "absolute",
    left: 10,
    top: 10,
    cursor: "pointer",
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      fontSize: 35,
    },
  },
  nav: {
    minWidth: 100,
  },
  navb: {
    width: 50,
  },
  cart: {
    color: "white",
    textDecoration: "none",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  input: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      // marginLeft:'40px'
    },
  },
  sideCart: {
    width: 200,
    height: 60,
    display: "flex",
    flexDirection: "column",
  },
  cartHeader: {
    width: `100%`,
    background: "#2874f0",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-betweeen",
    padding: 5,
  },
  CartLeft: {
    padding: 10,
    borderBottom: "1px solid lightgrey",
    color: "black",
    textDecoration: "none",
  },
}));
const Navbar = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const { cartItems } = useSelector((state) => state.Cart);

  // const [account, setAccount] = useContext( LoginContext );
  const { account, setAccount } = useContext(LoginContext);
  const openLoginDialog = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setNav(false);
  };
  const handleOpen = () => {
    setNav(true);
  };
  return (
    <div>
      <AppBar className={classes.navbar}>
        <Box className={classes.container}>
          <div className={classes.logotext}>
            <MenuIcon className={classes.menuButton} onClick={handleOpen} />
            <Drawer open={nav} onClose={handleClose} className={classes.nav}>
              <Box className={classes.sideCart}>
                <Box className={classes.cartHeader}>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Box style={{ display: "flex", alignItems: "flex-end" }}>
                    
                      <HomeIcon style={{ marginTop: 50 }} /> <span>Home</span>{" "}
                    </Box>
                  </Link>
                  <img
                    src={favicon}
                    style={{ width: 30, height: 25, marginLeft: "auto" }}
                  />
                </Box>
                <Link to="/cart" className={classes.CartLeft}>
                  <Badge badgeContent={cartItems.length} color="secondary">
                    <ShoppingCartIcon style={{ fontSize: 20 }} />
                  </Badge>
                  <span style={{ fontSize: 16, margin: 10 }}>Cart</span>
                </Link>
                <Box className={classes.CartLeft}>
                  <MoreIcon style={{ marginBottom: -5, paddingRight: 5 }} />{" "}
                  More
                </Box>
                <Typography
                  variant="contained"
                  className={classes.CartLeft}
                  onClick={() => {
                    openLoginDialog();
                  }}
                >
                  <LockOpenIcon style={{ marginBottom: -5, paddingRight: 5 }} />{" "}
                  Login
                </Typography>
              </Box>
            </Drawer>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                style={{
                  margin: 0,
                  padding: "4px",
                  fontSize: 22,
                  lineHeight: 1,
                  fontStyle: "italic",
                  color: "white",
                }}
              >
                Flipkart
              </Typography>
            </Link>

            <Box className={classes.logo}>
              <Typography
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  margin: 1,
                  marginTop: 0,
                }}
              >
                Explore
              </Typography>
              <Typography
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  margin: 1,
                  marginTop: 0,
                }}
              >
                Plus
              </Typography>
              <span>+</span>
            </Box>
          </div>
          <Search/>
        </Box>
        {account ? (
          <Profile account={account} setAccount={setAccount} />
        ) : (
          <Button
            variant="contained"
            className={classes.loginBtn}
            onClick={() => {
              openLoginDialog();
            }}
          >
            Login
          </Button>
        )}

        <Typography className={classes.cart}>More</Typography>
        <Box>
          <Link to="/cart" className={classes.cart}>
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
            <span style={{ fontSize: 16, margin: 10 }}>Cart</span>
          </Link>
        </Box>
      </AppBar>
      <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
    </div>
  );
};

export default Navbar;
