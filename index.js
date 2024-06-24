import express from "express";
import { configDotenv } from "dotenv";
import cors from 'cors';
import auth from "./Routes/auth.js";
import { connectToMongo } from "./db/config.js";
import events from "./Routes/events.js";
const app=express();

//Variables de entorno para que funcione
configDotenv();

// Database
connectToMongo();

//CORS
app.use(cors())

app.use(express.static('public'));
app.use(express.json());

//Rutas
//TODO: auth // crear, login, renwe
//TODO: CRUD: Eventos
app.use('/api/auth',auth)
app.use('/api/events',events)
app.listen(process.env.PORT,()=>{
//localhost:4001/api/events
});

//!configDotenv().parsed.PORT