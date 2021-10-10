import axios from "axios";

const url = "";
export const authenticatesSignup = async (user) => {
  
  try {
    return await axios.post(`${url}/signup`, user);
  } catch (err) {
    console.log(err + "while calling signup api");
  }
};

export const authenticateLogin = async (userlogin) => {
   console.log(userlogin)
  try {
    return await axios.post(`${url}/login`, userlogin);
  } catch (er) {
    console.log("error while calling login");
  }
};

export const payUsingPaytm = async (data) => {
  console.log('inside service')
  try {
    console.log('inside service still')
    let response = await axios.post(`${ url }/payment`, data)
    return response.data;
  } catch (err) {
    console.log(err, 'error in paytm payment')
  }
}
