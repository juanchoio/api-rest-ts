import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // console.log(`hola soy el LOG`);
    // res.send(`DESDE_EL_MIDDLEWARE`);
    const header = req.headers;
    const userAgent = header['user-agent'];
    console.log(`user-agent`, userAgent);
    
    next();
};


export { logMiddleware }