import{ sign, verify } from "jsonwebtoken";

const JWT_SECRET =  process.env.JWT_SECRET || "tken";

const generateToken = async (email: string, idUser: string) => {
    const jwt = sign({email, idUser}, JWT_SECRET, {
        expiresIn: "2h"
    });
    return jwt;
}


const verifyToken = (jwt: string) => {

    const isOk = verify(jwt, JWT_SECRET);
    return isOk;
}

export { generateToken, verifyToken }