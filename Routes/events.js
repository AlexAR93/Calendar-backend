//Todas tienen que pasar por validacion de JWT
import { Router } from "express";
import { createEvent, deleteEvent, getEvents, updateEvent } from "../controllers/events.js";
import { tokenValidator } from "../middlewares/token-validator.js";
import { check } from "express-validator";
import { fieldValidator } from "../middlewares/field-validator.js";
import { isDate } from "../helpers/isDate.js";

const app=Router();

export default app;

//Aplico globalmente el m iddleware token validatos asi no tengo que ponerlo 1x1
app.use(tokenValidator);
//! Si quisiera que getevents sea publico pero luego los demas metodos no. /***Abajo***/
//*Aplico el app.use(tokenValidator) por debajo de getEvents

//Obtener eventos
app.get('/', getEvents);

//Crear un nuevo evento
app.post('/', 
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom(isDate),
        check('end','Fecha de finalización es obligatoria').custom(isDate),
        fieldValidator
    ],
    createEvent);

//Actualizar evento
app.put('/:id', updateEvent);

//Borrar evento
app.delete('/:id', deleteEvent);
