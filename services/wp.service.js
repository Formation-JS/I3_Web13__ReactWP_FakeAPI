import articles from './../data/article.json' with { type: 'json' };

export function fetchPosts (page, perPage) {

    if(page < 1 || perPage < 1) {
        throw new Error('Page parametter is invalide');
    }

    const indexStart = (page-1) * perPage;
    const indexEnd = page * perPage;
    
    return articles.slice(indexStart, indexEnd);
}

export function fetctPostById(id) {

    return articles.find(article => article.id === id);
}


