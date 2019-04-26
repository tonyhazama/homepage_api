module.exports = function (app, db) {
    app.get('/todos', (req, res) => {
        db.query("select * from todo", (err, result) => {
            if (err) console.log(err);
            else res.send(result);
        });
    });

    app.get('/todos/today', (req, res) => {
        db.query("select * from todo where status != true", (err, result) => {
            if (err) console.log(err);
            else res.send(result);
        });
    });

    app.get('/todos/:id', (req, res) => {
        const id = req.params.id; 
        db.query(`select * from todo where id = ${id} limit 1`, (err, result) => {
            if (err) console.log(err);
            else res.send(result);
        });
    });

    app.post('/todos', (req, res) => {
        const dat = req.body;
        db.query(`insert into todo values ("", "${dat.title}", "${dat.time}", "${dat.date}", "${dat.status}" )`,(err, result) =>{
            if (err) console.log(err);
            else res.send(result);
        });
    });

    app.put('/todos/:id', (req, res ) => {
        const id = req.params.id;
        const dat = req.body;
        db.query(`update todo set ${ qb(dat) } where id = ${id}`, (err, result) => {
            if (err) console.log(err);
            else res.send(result);
        });
    });

    app.delete('/todos/:id', (req, res) => {
        const id = req.params.id;
        db.query(`delete from todo where id = ${id}`, (err, result) => {
            if (err) console.log(err);
            else res.send(result);
        });
    });
    
}