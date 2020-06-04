const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

module.exports = () => {
    //criando app
    const app = express();
    //midwares
    //erro do cors
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
        next();
    });
    //arquivos
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    //habilitando Html5
    app.all('/*', (req, res) => {
        res.sendFile(path.resolve('public/index.html'));
    });

    return app;
}