import express from 'express';
import { add_wpPost, getAll_wpPost, getById_wpPost } from './../controllers/wp.controller.js';


const wpRouter = express.Router();

wpRouter.route('/post')
    .get(getAll_wpPost)
    .post(add_wpPost);

wpRouter.route('/post/:id')
    .get(getById_wpPost);

export default wpRouter;