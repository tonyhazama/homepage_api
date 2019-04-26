export default class Table{
    constructor(db, table) {
        this.table = table;
        this.db = db;
    }

    loop($data) {
        for (key in $data) {
            query += `${key} = "${$data[key]}", `;
        }
        return query.substring(0, query.length - 2);
    }

    run($query) {
        db.query($query, (err, result) => {
            if (err) {
                console.error(err);
            } else {
                return result;
            }
            return null;
        });
    }

    readAll(){
        return this.run(`select * from ${table}`);
    }

    readOne(parameter) {
        return this.run(`select * from ${table} where `+this.loop(parameter)+` limit 1`);
    }

    // create(data) {
    //     return this.run(`insert into ${table} ` + )
    // }
}