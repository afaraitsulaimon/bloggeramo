import express  from "express";
import mongoose from 'mongoose'

const app = express();

mongoose.connect('mongodb+srv://admin:eCvAbqWB2ZP5RoKx@cluster0.lucam.mongodb.net/Blog?retryWrites=true&w=majority')
.then(() => app.listen(5000))
.then(() => console.log('Connected to database and listen to port 5000'))
.catch((err) => console.log(err));

