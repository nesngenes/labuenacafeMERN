import jwt, {decode} from 'jsonwebtoken';

const secret = process.env.SECRET

const auth = async(req,res,next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        let decodedData;

        if(token){
            decodedData = jwt.verify(token, process.env.SECRET);
            req.userId = decodedData?.id;
        }

        next();

    } catch (error) {
        console.log(error);
    }
}

export default auth;