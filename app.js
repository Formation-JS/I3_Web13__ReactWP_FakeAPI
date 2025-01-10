import express from 'express';
import demoRouter from './routers/demo.router.js';

//! Initialisation et configuration de la WebAPI
const app = express();
const { PORT } = process.env;

//! Définition des routes
app.use('/demo', demoRouter);

//! Démarrage de la WebAPI
app.listen(PORT, () => {
    console.log(`Web API is running on port ${PORT}`);
});