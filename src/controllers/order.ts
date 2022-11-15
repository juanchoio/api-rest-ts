import { Request, Response } from "express"
import { RequestExt } from "../interfaces/requestExt.interface";
import { handleHttp } from "../utils/error.handle";



const getItem = (req: RequestExt, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, `ERROR_GET_BLOG`);
    }
}

const getItems = (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: `ESTO_SOLO_LO_VEN_LAS_PERSONAS_CON_SESION_JWT`,
            user: req.user
        });     
    } catch (error) {
        handleHttp(res, `ERROR_GET_BLOGS`);
    }
}


export { 
    getItem,
    getItems
}