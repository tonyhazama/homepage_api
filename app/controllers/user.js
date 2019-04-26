import Table from './table';

export default class User extends Table{

    constructor(db) {
        super(db, 'user');
    }

    login(user) {
        return new Promise((resolve, reject) => {
            this.db.query(`SELECT * FROM ${this.table} WHERE username = "${user.username}" AND password = "${user.password}"`, (err, result) => {
                if(err) {
                    console.log(err);
                    reject(undefined);
                }else{
                    resolve(result);
                }
            });
        });
    }
}
