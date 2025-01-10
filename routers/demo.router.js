//! Role des routers
//? Réaliser le lien entre l'url cible et la méthode du controller
//? Littéralement, il sert d'aiguillage dans notre application

import express from 'express';
import { guessNumber, helloWorld } from '../controllers/demo.controller.js';
// import * as demoController from './../controllers/demo.controller.js';

// Choix pour les imports quand il n'y a pas de "export default" : 
// - Importé chaques méthodes
// - Importé les éléménts via le "joker" et ajouter un alias ->  " * as ... "

const demoRouter = express.Router();

demoRouter.route('/hello')
    .get(helloWorld);

demoRouter.route('/guess/:nb')
    .get(guessNumber);

export default demoRouter;