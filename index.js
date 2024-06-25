import { __dirname } from "./dirname.js";
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
app.use('/api/auth',auth)
app.use('/api/events',events)

app.use('*',(req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
});

app.listen(process.env.PORT,()=>{
//https://calendar-mern-back.up.railway.app/api/auth
});
