
const jwt = require('jsonwebtoken');

const Authenticate  =(req,res,next)=> {

   
    const token = req.headers?.authorization?.split(" ")[1];
    console.log(token);

      if ( token) {

        const decoded = jwt.verify( token , 'secret');
          next();
      }
      else {
        res.send({"msg" : "please login"})
      }
}


module.exports = {
    Authenticate
}