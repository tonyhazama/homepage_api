import jwt from 'jsonwebtoken'
import User from '../controllers/user';
import db from './connection';

export function login(credential) {
    const user = new User(db);
    // let data;
    return new Promise((resolve, rejct) => {
        user.login({
            'username': credential.username,
            'password': credential.password
        }).then(data => {
            resolve(signJWT({
                'id': data.id,
                'username': data.username,
                'role': data.role
            }));
        }).catch((err) => reject(0));
    });
}

export function verifyJWT(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err || !decodedToken) {
                return reject(err)
            }

            resolve(decodedToken)
        })
    })
}

export function signJWT(payload) {
    const key = 'secret';
    const token = jwt.sign({ 'user': payload }, key);
    // jwt.sign({ 'user': payload }, key, (err, jwtToken) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(jwtToken);
    //         token = jwtToken;
            
    //     }
    // });


    return token;
}

