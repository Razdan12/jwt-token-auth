const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config();

const SecretKey = process.env.KEY;

const AuthAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        res.status(401).json({error: "mising authorization header"});
        return;
    };

    const token = authHeader.split(' ')[1]

    try {
        const decodedToken = jwt.verify(token, SecretKey);

        req.user = decodedToken;
        if(req.user.role !== 'admin'){
            res.status(401).json({error: "invalid role admin"});
            return;

        }
        next();
    } catch (error) {
        res.status(401).json({error: "mising token"});
    }

}

module.exports = {AuthAdmin}