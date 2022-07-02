const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
 
const PORT = process.env.PORT || 8000;

app.use(cors());

const TodoItemRoute = require('./routes/todoItems');

mongoose.connect("mongodb+srv://midhunvarma:midhun1996@cluster0.ids1ifh.mongodb.net/?retryWrites=true&w=majority")
.then(()=> console.log("DB connected"))
.catch(err => console.log(err))

app.use('/', TodoItemRoute);

app.listen(PORT, ()=> console.log("Server is running on port 8000") );
