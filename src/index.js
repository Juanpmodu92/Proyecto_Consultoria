/* --------------------------------- Import --------------------------------- */
import express from 'express';

/* ----------------------------- Initialization ----------------------------- */
const app = express();

/* --------------------------------- Setting -------------------------------- */
app.set('port', process.env.PORT || 8080)

/* ------------------------------- Middlewares ------------------------------ */


/* --------------------------------- Routes --------------------------------- */

/* ------------------------------ Public Files ------------------------------ */

/* ------------------------------- Run server ------------------------------- */
app.listen(app.get('port'), () =>{
    console.log('server listening on port', app.get('port'));
});