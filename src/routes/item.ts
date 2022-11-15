import { Request, Response, Router } from "express";
import { deleteItem, getItem, getitems, postItem, updateItem } from "../controllers/item";
import { logMiddleware } from "../middleware/log";
import { checkJwt } from "../middleware/session";

const router = Router();

/**
 * http://localhost:3002/items [GET]
 */
router.get('/', checkJwt, getitems);
router.get('/:id', logMiddleware, getItem);
router.post('/', postItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);



export {router}