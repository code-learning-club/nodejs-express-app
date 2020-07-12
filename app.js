const express = require('express');
const router = require('./router');

app.set('view engine', 'pug');
app.use(express.static('public'));

app.use(router);

app.listen(3000, function () {
  console.log("Nous avons démarré notre serveur sur le port 3000");
});