import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import {clusteredData} from './utils/helper.js'

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get('/health',(req,res)=>{
    res.send('server is perfectly running');
})
app.post('/cluster',async(req,res)=>{
    const resPoints=req.body.points;
    const data=await clusteredData(resPoints);
    res.json(data);
})


const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})