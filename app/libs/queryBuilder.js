class queryBuilder{
    constructor(){}
    
    loop($data) {
        for (key in $data) {
            query += `${key} = "${$data[key]}", `;
        }
        return query.substring(0, query.length - 2);
    }
    update(table, data, parameter) {
        let query = `update ${table} set `;
        query = query + loop(data) + ' where ' + loop(parameter);
    }
}