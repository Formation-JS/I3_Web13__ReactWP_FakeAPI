import express from 'express';

//! Initialisation et configuration de la WebAPI
const app = express();
const { PORT } = process.env;

//! Définition des routes
app.get('/', (req, res) => {
    res.status(200).json('Hello World');
});

//! Démarrage de la WebAPI
app.listen(PORT, () => {
    console.log(`Web API is running on port ${PORT}`);
});