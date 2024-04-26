import express from 'express'
import cors from 'cors'
import mongoose from './db/dbConnection.js'
import routes from './routes/index.js';



const app=express()


app.use(express.json())
app.use(cors())
app.use(express.static('uploads'));
// app.set('view engine','ejs')
app.use(routes);

app.use('*', (req, res) => {
  res.status(404).json({ message: 'No Route Found' });
});

app.listen(4444, () => {
  console.log('http://localhost:4444/');
});

