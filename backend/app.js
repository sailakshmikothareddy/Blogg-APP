import express from "express";
import mongoose from "mongoose";
import blogRouter from "./rotes/blog-routes";
import router from "./rotes/user-routes";
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json()); 
app.use("/api/user",router); 
app.use("/api/blogs",blogRouter);
// mongoose.set('strictQuery', false);


mongoose.connect('mongodb+srv://sai:5GuVNNdvxNLBCTNg@cluster0.0hmsc1g.mongodb.net/Blog?retryWrites=true&w=majority')
.then(() =>app.listen(5000)).then(() => console.log("connected to database and listening to localhost 5000"))
.catch((err) => console.log(err)); 

// 5GuVNNdvxNLBCTNg