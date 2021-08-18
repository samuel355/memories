import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

//initialize app
const app = express();

//important to use
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//monogodb connection....https://www.mongodb.com/cloud/atlas

const databaseUrl = 'mongodb+srv://admin:Confirmation12@cluster0.otdly.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 8080;

mongoose.connect(databaseUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => app.listen([PORT, () => console.log(`Server Running on Port: ${PORT}`)]))
    .catch( (error) => console.log(error.message))