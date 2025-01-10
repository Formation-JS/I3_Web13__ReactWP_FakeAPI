# Fake WebAPI WP

## Recap des commandes
```
# Initialiser le projet node
npm init

# Installation d'express (v5)
npm i express@next

# Outils de dev (watch)
npm i nodemon --save-dev
```

Remarque pour l'outil de dev : \
Il est également possible d'utiliser "--watch" a partir de Node v22+ \
Dans ce cas, la commande a executer pour lancer le projet est
```
node app.js --watch
```

## Modification du fichier package.json
```json
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

## Proposition de structure 
```
controllers
routers
services
app.js
```