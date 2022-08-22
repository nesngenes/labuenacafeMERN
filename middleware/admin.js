import jwt, {decode} from 'jsonwebtoken';

const secret = 'test'

const admin = async(req,res,next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        let decodedData;

        if(token){
            decodedData = jwt.verify(token, secret);
            req.userId = decodedData?.id;
            console.log(decodedData?.role)
        }
        
        decodedData?.role === 'admin'
        

        next();

    } catch (error) {
        console.log(error);
    }
}

export default admin;