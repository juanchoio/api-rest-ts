import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

export interface RequestExt extends Request{
    // email?: string;
    // idUser?: string;
    user?: string | JwtPayload | any | { 
        id: string;
    };
}