import { verify } from './auth';

export function verifyToken(req, res, next) {
    // Catch Token Bearer <auth_token> 
    const bearerHeader = req.header['Authorization'];
    // Checking if token exist
    if (typeof bearerHeader !== 'undefined') {
        // Take the token
        const token = bearerHeader.split(" ")[1];
        if (token.verify(token)) {
            // If token valid valid
            next();
        } else {
            res.sendStatus(403);
        }
    } else {
        res.sendStatus(403);
    }
}
