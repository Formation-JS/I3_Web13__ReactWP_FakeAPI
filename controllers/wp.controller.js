import { fetchPosts, fetctPostById } from '../services/wp.service.js';

export function getAll_wpPost(req, res) {
    // Gestion des parametre query (?page=...&per_page=...)
    const page = parseInt(req.query.page ?? 1);
    const perPage = parseInt(req.query.per_page ?? 10);

    // Obtenir les données (via les services)
    const articles = fetchPosts(page, perPage);

    // Renvoyer les données
    res.status(200).json(articles);
}

export function getById_wpPost(req, res) {
    // Gestion du parametre "id"
    const articleId = parseInt(req.params.id);

    // Obtenir l'article
    const article = fetctPostById(articleId);

    // Renvoyer une response en fonction de si l'article existe ou pas
    if(!article) {
        res.sendStatus(404);
        return;
    }

    res.status(200).json(article);
}

export function add_wpPost(req, res) {
    res.sendStatus(501);
}
