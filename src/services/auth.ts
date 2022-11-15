import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";


const registerNewUser = async (user: User) => {
    const checkIs = await UserModel.findOne({email: user.email});
    if(checkIs) return `ALREADY_USER`;
    const passHash = await encrypt(user.password);

    const registerNewUser = await UserModel.create(
        {
            email: user.email,
            password: passHash,
            name: user.name
            
        }
    );
    //TODO password: 123456
    return registerNewUser;
}


const loginUser = async ({email, password}: Auth) => {
    const checkIs = await UserModel.findOne({email});
    if(!checkIs) return `NOT_FOUND_USER`;

    const passwordHash = checkIs.password; //TODO el encriptado
    const isCorrect = await verified(password, passwordHash);
    if(!isCorrect) return `PASSWORD_INCORRECT`;
  
    const token = await generateToken(checkIs.email, checkIs._id.toString());
    // console.log(checkIs);
        
    const data = {
        token,
        user: checkIs
    };
    
    return data;
}

export { registerNewUser, loginUser }