import express from 'express'
import connectDB from './DB'
import JobRouter from './Routers/job.router';
import CondidateRouter from './Routers/condidate.router';
import bodyParser from 'body-parser';
// import LinkRouter from './Routers/LinkRouter.js'
import cors from  'cors'
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}

connectDB();
const app =express()

const port = 4000;
// app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/Job', JobRouter);
app.use('/Condidate', CondidateRouter);

app.listen(port , function(){
    console.log(`app listening http://localhost:${port}`);
})

// const bodyParser =require('body-parser');
// import express, { Request, Response } from "express";
// const app=express();
// const port=4000;
// app.use(bodyParser.json());
// app.get('/',(req:Request,res:Response):void=>{
//     res.send('Hello world!');
// });
// app.listen(port,():void=>{
//     console.log(`example app listen on http//localhost:${port}`);
// });