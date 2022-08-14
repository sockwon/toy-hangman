const userDao = require('../models/userDao');
const bcrypt = require("../middleware/bcrypt");
const jwt = require("../middleware/jwt");

const signUp = async (email, password) => {
    const pwValidation = new RegExp(
        '^[a-zA-Z0-9]{4,10}$'
      );
      const emailValidation = new RegExp(
        '^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$'
      );
      if (!pwValidation.test(password)) {
        const err = new Error('PASSWORD_IS_NOT_VALID');
        err.statusCode = 409;
        throw err;
      }
      if(!emailValidation.test(email)){
        const err = new Error('EMAIL_IS_NOT_VALID');
        err.statusCode = 409;
        throw err;
      }

    try{
      const createUser = await userDao.createUser(
          email,
          password
        );
        return createUser;
      }catch(err){
        const error = new Error("BAD request")
        error.statusCode=400;
        throw error
       }
      };
  
  const login=async(email, password)=>{
  
    const temp = await userDao.login(email);
    const hashedPassword = temp[0].password
    const payLoad = {email : email, id : temp[0].id}
    const confirm = await bcrypt.verifyHash(password, hashedPassword);
    return confirm === true 
    ? jwt.newJwt(payLoad)
    : confirm
    
  }
  
  module.exports = {
      signUp, login
  }
