import jwt from "jsonwebtoken"
////////////////IMP!!!!!!!!!!!!!!!\\\\\\\\\\\\\\\\\\\\\
//JWTs are base64 encoded and not encrypted
//so anyone can decode!!!!
//DO NOT PASS SENSITIVE INFORMATION

//jwt checks if the tokenwas tempered with using the JWT secret
//if valid, decode contains the original payload
const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'] //extract token from the header

    if(!token) { return res.status(401).json({message: "No token provided"});}

    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if(err) {return res.status(401).json({message: "Invalid token"});}
        //decoded arguement is going to give us access to some of the core parameters of the verified user
        req.userId = decode.id
        console.log(req.userId)
        next(); //move to next thing (continue)
    });
}

export default authMiddleware
