import express from 'express';
import demoRouter from './routers/demo.router.js';
import wpRouter from './routers/wp.router.js';

//! Initialisation et configuration de la WebAPI
const app = express();
app.use(express.json());               // json
// app.use(express.urlencoded());      // x-www-form-urlencoded (formulaire)

const { PORT } = process.env;

//! Définition des routes
app.use('/demo', demoRouter);
app.use('/wp/v2', wpRouter);

//! Démarrage de la WebAPI
app.listen(PORT, () => {
    console.log(`Web API is running on port ${PORT}`);
});