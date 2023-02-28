// appelle de la librairie express
const express = require("express");

// pour aller chercher dans la bibliotèque express quand on appel app
const app = express();

// definir le port
const port = 5000;

// lancement du serveur 
app.listen(port, () => console.log("le serveur à démarré au port " + port ));

