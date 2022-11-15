import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middleware/session";

/**
 * Esta ruta solo puede ser accedida por personas que tienen sesion activa!
 * Que tenga un jwt válido
 */
const router = Router();

router.get('/', checkJwt, getItems);

export { router };