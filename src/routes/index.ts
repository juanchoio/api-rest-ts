import { Request, Response, Router } from "express";
import { readdirSync} from "fs";

const PATH_ROUTER = `${__dirname}`;//TODO retorna ruta directorio actual
const router = Router();


/**
 * 
 * @param fileName Nombres archivos 'index.ts', 'item.ts' ['item', 'ts']
 * @returns Nombre de la ruta
 */
const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift()
    return file;
};

//TODO lee cuantos y cuales archivos hay en un derectorio
readdirSync(PATH_ROUTER).filter((filename) => {
    const cleanName = cleanFileName(filename);
    if(cleanName !== 'index'){
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Se esta cargando la ruta... /${cleanName}`);            
            router.use(`/${cleanName}`, moduleRouter.router)
        });
    }
    
});


export { router }