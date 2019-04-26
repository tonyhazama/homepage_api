// const noteRoutes = require('./note_routes');
// const todoRoutes = require('./todo_routes');
// const authRoutes = require('./auth_routes');

// module.exports = function(app, db) {
//     noteRoutes(app, db);
//     todoRoutes(app, db);
//     // authRoutes(app, db);
// }

import auth_routes from './auth_routes';


export const ROUTES = [
    auth_routes,
    // todo_routes,
];