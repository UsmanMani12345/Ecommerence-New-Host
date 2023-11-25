import express from 'express';
import Colors from 'colors';
import dotenv from 'dotenv';


//config env
dotenv.config();

const app = express();

// REST API
app.get('/', (req, res) => {
    res.send("<h1>Welcome To Over Ecommerence App</h1>");
});

// PORT
const PORT = process.env.PORT || 8080;

// RUN LISTEN
app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`.bgCyan);
});
