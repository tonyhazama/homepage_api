import { Router } from 'express';
import { login } from '../libs/auth'
import db from '../libs/connection';

const router = Router();

/*
  ROUTES
*/

router.post('/login', (req, res) => {
    // db.query("select * from user", (err, res) => {
    //     console.log(err);
    //     console.log(res);
    // });
    const user = req.body;
    // let token;
    
    if(typeof user === 'object' && user.username && user.password){   
        login(user).then((token) => {
            
            if(token) {
                res.status(200).json({
                    'message': 'Login Success !',
                    'token': token
                });
            } else {
                res.status(403).json({
                    'message': 'Wrong Credential !',
                });
            } 
        }).catch((err) => console.log(err));
    } else {
        res.send(user);
    } 
    
});


export default router;
