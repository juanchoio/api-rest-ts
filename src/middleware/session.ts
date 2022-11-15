import { NextFunction, Request, Response } from "express";
import { RequestExt } from "../interfaces/requestExt.interface";
import { verifyToken } from "../utils/jwt.handle";



const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {

    try {
        const jwtUser = req.headers.authorization || '';
        const jwt  = jwtUser.split(' ').pop();//TODO ['Bearer', 'jwt']
        const isUser = verifyToken(`${jwt}`);
        // console.log('isUser', isUser);
        
        
        if(!isUser){
            res.send(401);
            res.send(`NO_TIENES_UN_JWT_VALIDO`);
        } else {
            req.user = isUser;
            next();            
        }
    } catch (error) {
        console.log(error);
        
        res.status(402);
        res.send(`SESSION_NO_VALID`);
    }
}

export { checkJwt }