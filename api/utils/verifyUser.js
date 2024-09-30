import jwt from 'jsonwebtoken'
import errorHandler from './error.js'

export const verifyToken=(req,res,next)=>{
    const token=req.cookie.secrettoken;
    if(!token){
        return next(errorHandler('Unauthorized',401))
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            return next(errorHandler('Unauthorized',401))
        }
        req.userId=user;
        next();
    })
}