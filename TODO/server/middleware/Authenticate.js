
const jwt = require('jsonwebtoken');

const Authenticate = (req, res, next) => {


    // const token = req.headers?.authorization?.split(" ")[1];
    // console.log(token);
 const token = req.headers.authorization;
    if (token) {

        const decoded = jwt.verify(token, 'secret');
               
        if (decoded) {
            // console.log(decoded);
            const userID = decoded.userID;
            req.body.userID = userID;
            next();
        }
        else {
            res.send({ "msg": "please login" })
        }

    }
    else {
        res.send({ "msg": "please login" })
    }
}


module.exports = {
    Authenticate
}