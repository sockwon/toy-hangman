const userService = require("../services/userService");

const signUp = async (req, res) => {
    try {
      const {email, password} = await req.body
      console.log(req.body,1000000000000)
      if ( !email || !password ) {
        return res.status(400).json({ message: 'KEY_ERROR' });
      }
      const pwValidation = new RegExp(
        '^[a-zA-Z0-9]{4,10}$'
      );
      const emailValidation = new RegExp(
        '^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$'
      );
      if (!pwValidation.test(password)) {
        return res.status(400).json({ message:"INVALID USER" });
      }
      if(!emailValidation.test(email)){
        return res.status(400).json({ message:"INVALID USER" });
      }
  
      userService.signUp( email, password );
      return res.status(201).json({
        message: 'SIGNUP_SUCCESS',
      });
    } catch (err) {
      return res.status(err.statusCode || 500).json({ message: err.message });
    }
  };

const login= async(req,res)=>{
 try{ 
    const { email, password } = req.body;
    const token = await userService.login(email, password);
    return res.status(201).json({
      message: 'LOGIN_SUCCESS', token: token
    })

 }catch(err){
  return res.status(err.statusCode || 500).json({ message: err.message });
 }
}

module.exports = {
    signUp, login
}