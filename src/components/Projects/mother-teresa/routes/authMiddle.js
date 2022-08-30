const jwt = require('jsonwebtoken');

// authentication middle
exports.requireLogin = (req, res, next) => {
    console.log(req.user);
    try {
        if(req.headers.authorization){
            const token = req.headers.authorization.split(' ')[1];
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            //attach token to request
            req.user = decode;
            next();
        } else {
            return res.status(400).json({ message: 'Unauthorized'})
        }
    } catch {
       console.log("somethings wrong playa")
        }
    }
