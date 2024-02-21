import {PORT, mongoDBURL} from './config.js';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    console.log(request);
   return res.status(200).send('Welcome to Sailor Cards!');
});


app.get('/cards', async (request, response) => {
    try{
        const cards = await Card.find({});

        return response.status(200).json({cards: cards});
    }catch (error){
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

mongoose.connect(mongoDBURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}    )
.then(()=> {
    console.log('App connected to database');
})
.catch((error)=> {
    console.log(error);
})

app.listen(PORT, ()=> {
    console.log(`Listening on ${PORT}...`)
})

