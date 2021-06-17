
 require('dotenv').config();


const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 8000;

const Movieroute = require('./routes/Movie');

const dburl =process.env.DB_URL ||'mongodb://localhost:27017/Movie-app';

mongoose.connect(dburl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connection open mongo");
    })
    .catch(() => {
        console.log("error try again - mongo");
        mongoose.connect(dburl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
        .then(() => {
            console.log("connection open mongo");
        })
        .catch(() => {
            console.log("error try again - mongo");
        })
    }
    )
mongoose.set('useFindAndModify',false);
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.json({extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/',(req,res)=>{
    res.send("hello world");
})

app.use('/movie',Movieroute);

app.listen(port,()=>{
    console.log("Running App");
})