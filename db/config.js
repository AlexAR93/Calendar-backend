import mongoose from "mongoose";


export const connectToMongo=async ()=>{
    try {
        await mongoose.connect(process.env.DB_CNN);
    } catch (error) {
        throw new Error('DataBase init error')
    }
}