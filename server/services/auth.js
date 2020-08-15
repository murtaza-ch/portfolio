const jwy=require('express-jwt');
const jwksRsa=require('jwks-rsa');

const namespace="http://localhost:3000";

// Middleware
exports.checkJWT=jwy({
    secret:jwksRsa.expressJwtSecret({
        cache:true,
        rateLimit: true,
        jwksRequestsPerMinute: 15,
        jwksUri: 'https://dev-rn28q11r.us.auth0.com/.well-known/jwks.json'
    }),
    audience:'XMR7rKdKSKmukU32NTPen56cxTYXPcOP',
    issuer:'https://dev-rn28q11r.us.auth0.com/',
    algorithms: ['RS256']
})

exports.checkRole=function(role){
    return function(req,res,next){
        const user=req.user;
        if(user && (user[namespace + '/role'] === role)){
            next();
        }
        else{
            return res.status(401).send({title:'No authorized', detail:'You are not authorized to access this page!'})

        }
    }
}