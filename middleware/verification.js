const jwt = require('jsonwebtoken');
const config = require('../config/secret');

function verification(){
    return function(req,res,next){
        var role = req.body.role;
        // checked authorization header
        var tokenWithBearer = req.headers.authorization;
        if(tokenWithBearer){
            var token = tokenWithBearer.split(' ')[1];
            
            //verification
            jwt.verify(token, config.secret, function(err, decoded){
                if(err){
                    return res.status(401).send({auth:false, message:'Unregistered Token!'});
                } else {
                    if(role==2){
                        req.auth = decoded;
                        next();
                    } else {
                        return res.status(401).send({auth:false, message:'Failed to Authorize Your Role!'});
                    }
                }
            });
        } else {
            return res.status(401).send({auth:false, message:'Token not available!'});
        }
    }
}

module.exports = verification;