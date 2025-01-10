//! Role des controllers
//? Résoudre le requete et envoyé une réponse adapté

export function helloWorld(req, res) {
    res.status(200).json('Hello World');
};

export function guessNumber(req, res) {
    const nb = parseInt(req.params.nb);

    if (isNaN(nb)) {
        // res.sendStatus(400);
        res.status(400).json({ error: 'La valeur invalide !' });
        return;
    }

    const msg = (nb === 42) ? 'C\'est la réponse ultime' : `C'est le nombre ${nb} -_-`;
    res.status(200).json({ msg });
};

export function readPostMsg(req, res) {
    // Format du body attentu : 
    // {
    //     "msg": "Hello",
    //     "author": "Magaly"
    // }

    const { msg, author } = req.body;

    // Traitement (Cas réel -> Utilisation d'un DB, d'une API externe, ...)
    console.log(`Message reçu de ${author} : ${msg}`);
    
    // Réponse
    res.status(200).json({ msg : `Message traité. Merci ${author} !` });
}
