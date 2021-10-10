import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  makeStyles,
  Typography,
  TextField,
} from "@material-ui/core";

//components

import { authenticatesSignup } from "../service/api";
import { authenticateLogin } from "../service/api";

const UseStyles = makeStyles((theme) => ({
  component: {
    height: `50rem`,
    width: `37rem`,
    display: "flex",
    flexDirection: "row",
    padding: 0,
    paddingTop: 0,
    overflow: "hidden",
    color: "white",
    display: "flex",
    background: "#2874f0",
    [theme.breakpoints.down("md")]: {
      height: `70vh`,
      width: `30rem`,
    },
    [theme.breakpoints.down("sm")]: {
      height: `72vh`,
      width: `20rem`,
      flexDirection: `column`,
      justifyContent: "center",
      padding: 0,
    },

    // alignItems:'center'
  },
  image: {
    background: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    height: `90%`,
    backgroundRepeat: "no-repeat",
    width: `100%`,
    backgroundPosition: `center 85%`,
    padding: `45px 35px`,
    "& > *": {
      color: "#fff",
      fontweight: 600,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  leftHalf: {
    width: `40%`,
    margin: 0,
    paddin: 0,
    background: "#2874f0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: `100%`,
      height:`12%`,
      fontSize: 18,
      
    },
  },
  login: {
    padding: `55px 35px`,
    maxWidth: `57%`,
    height: `96%`,
    display: `flex`,
    flex: 1,
    flexDirection: "column",
    "& > *": {
      marginTop: 20,
    },
    background: "white",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      height: `95%`,
      "& > *": {
        marginTop: 5,
      },
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: `96%`,
      padding: `10px 10px`,
      margin: 5,
      textAlign: 'center',
      height:`85%`
      
    },
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  loginBtn: {
    textTransform: "none",
    background: "#f8641b",
    color: "#fff",
    height: 48,
    borderRadius: 5,
    [theme.breakpoints.down("md")]: {
      width: `60%`,
      marginTop: 20,
      height: 40,
    },
    [theme.breakpoints.down("sm")]: {
      width: `40%`,
      margin:'20px auto',
      height: 30,
    },
  },
  requesBtn: {
    textTransform: "none",
    background: "#fff",
    color: "#2874f0",
    height: 48,
    borderRadius: 5,
    boxShadow: "0 2px 4px 0 rgb(0 0 0 /20%)",
    [theme.breakpoints.down("sm")]: {
      width: `40%`,
      margin:'10px auto',
      height: 30,
    },
  },
  createText: {
    textAlign: "center",
    marginTop: "auto",
    fontSize: 16,
    color: "32874f0",
    fontWeight: 600,
    cursor: "pointer",
    color: "black",
    [theme.breakpoints.down("md")]: {
      marginTop: 10,
    },
  },
  error: {
    fontSize: 14,
    color: "#ff6161",
    margin: "5px",
    marginLeft: "20px",
  },
  headerText: {
    
    [theme.breakpoints.down("sm")]: {
      width: `100%`,
      fontSize: 22,
      
    },
  },
  subHeader: {
    
      [theme.breakpoints.down("sm")]: {
        width: `100%`,
      fontSize: 14,
        padding:5
      },
    
  }
}));
const initialvalue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your orders,wishlist and Recommendation",
  },
  signup: {
    view: "signup",
    heading: "Looks like you are new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
 
};
const Login = ({ open, setOpen, setAccount }) => {
  const signupInitialvalue = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  };
  const classes = UseStyles();

  const loginInitialvalue = {
    username: "",
    password: "",
  };
  //use states
  const [account, toggleAccount] = useState(initialvalue.login);
  const [signup, setSignup] = useState(signupInitialvalue);
  const [login, setLogin] = useState(loginInitialvalue);
  const [error, setError] = useState(false);
  //functions
  const handleClose = () => {
    setOpen(false);
    toggleAccount(initialvalue.login);
  };
  const toggleuseraccount = () => {
    toggleAccount(initialvalue.signup);
  };
  const signupuser = async () => {
    let response = await authenticatesSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.username);
  };
  const onInputChange = (e) => {
    setSignup(
      { ...signup, [e.target.name]: e.target.value } //taking key :value
    );
    console.log(signup);
  };
  const onValueChange = (e) => {
    setLogin(
      { ...login, [e.target.name]: e.target.value } //taking key :value
    );
    console.log(login);
  };
  const loginUser = async () => {
    let response = await authenticateLogin(login);

    if (!response) {
      setError(true);
    } else {
      handleClose();
      setAccount(login.username);
    }
  };
  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        <DialogContent className={classes.component}>
          <Box className={classes.leftHalf}>
            <Typography variant="h5" style={{ textAlign: "center" }}  className={classes.headerText}>
              {account.heading}
            </Typography>
            <Typography style={{ textAlign: "center", width: `100%` }} className={classes.subHeader}>
              {account.subHeading}
            </Typography>
            <Box className={classes.image}></Box>
          </Box>
          {account.view === "login" ? (
            <Box className={classes.login}>
              <TextField
                name="username"
                label="Enter email/phone number"
                onChange={(e) => onValueChange(e)}
              />

              <TextField
                name="password"
                label="Enter password"
                onChange={(e) => onValueChange(e)}
              />
              {error && (
                <Typography className={classes.error}>
                  Invalid details
                </Typography>
              )}
              <Typography className={classes.text}>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Typography>
              <Button
                variant="contained"
                className={classes.loginBtn}
                onClick={() => {
                  loginUser();
                }}
              >
                Login
              </Button>
              <Typography style={{ textAlign: "center" ,color:'black' }}>or</Typography>
              <Button variant="contained" className={classes.requesBtn}>
                Request otp
              </Button>
              <Typography
                onClick={() => {
                  toggleuseraccount();
                }}
                className={classes.createText}
              >
                New to flipkart ? create an account
              </Typography>
            </Box>
          ) : (
            <Box className={classes.login}>
              <TextField
                name="firstname"
                label="Enter firstname"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="lastname"
                label="Enter lastname"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="username"
                label="Enter username"
                onChange={(e) => onInputChange(e)}
              />

              <TextField
                name="email"
                label="Enter email"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="password"
                label="Enter password"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="phone"
                label="Enter phone no."
                onChange={(e) => onInputChange(e)}
              />
              <Button
                variant="contained"
                className={classes.loginBtn}
                onClick={() => {
                  signupuser();
                }}
              >
                Signup
              </Button>
            </Box>
          )}

        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;
