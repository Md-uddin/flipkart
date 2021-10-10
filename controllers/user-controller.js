import User from '../models/userSchema.js'

export const userSignup = async (req, res) => {
    try {
        const exist = await User.findOne({ username: req.body.username });
        console.log('working ')
        if (exist) {
            return response.status(401).json('user already exists')
        }
        console.log('working 2')

            const user = req.body;
            const newUser = new User(user);
        await newUser.save();
        console.log('working 3')
        
            res.status(200).json('user is successfully registered');
        
  } catch (err) {
      console.log(err.message + 'hereis error')
  }  
 
}
export const userLogin = async (req,res) => {
    try {
        let user = await User.findOne({username:req.body.username,password:req.body.password})
        console.log('working');
        console.log(user)
        if (user) {
           return res.status(200).json(`${req.body.username}user is successfully login`);
            
        } else {
            console.log('invalid login')
            return res.status(401).json('invalid login credentials')
        }
    } catch (err) {
        console.log(err.message)
        console.log('working')
    }
}