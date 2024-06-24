import express from "express";
import { check } from "express-validator";
import { toCreateUser, toLogin, toRenew } from "../controllers/auth.js";
import { fieldValidator } from "../middlewares/field-validator.js";
import { tokenValidator } from "../middlewares/token-validator.js";
const app=express.Router();

export default app;

app.post('/register', [
    //middlewares
    //! Ver documentación de express-validator
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 6 caracteres').isLength({min:6}),
    fieldValidator
], toCreateUser);

app.post('/', toLogin);

app.get('/renew', tokenValidator, toRenew);