import { Response } from "express"
import { RequestExt } from "../interfaces/requestExt.interface"
import { Storage } from "../interfaces/storage.interface";
import { registerUpload } from "../services/storage";
import { handleHttp } from "../utils/error.handle"



const getFile = async (req: RequestExt, res: Response) => {
    try {
        const { user, file } = req;
        
        const dataToRegister: Storage = {
            fileName: `${file?.filename}`,
            idUser: `${user?.idUser}`,
            path: `${file?.path}`
        }
        const response = await registerUpload(dataToRegister);
        res.send(response);
    } catch (error) {
        handleHttp(res, `ERROR_GET_BLOG`);
    }
}


export { getFile }