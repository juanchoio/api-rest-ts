import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
    console.log(errorRaw);
    
    res.status(500);
    res.send({ error });
    // TODO aqui puede ir un log a una db o txt
}

export { handleHttp }; 