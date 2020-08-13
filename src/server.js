const express = require('express');
const open = require('open');
const path = require('path');

const app = express();
const port = 8000;
const pathPrefix = '/okko-pwa';
const listeningDirPath = path.join(__dirname, '../docs');

app.use(pathPrefix, express.static(listeningDirPath));

app.listen(port, () => {
    console.log(`App listening dir ${listeningDirPath}`);
    console.log(`App listening at http://localhost:${port}`);
    open(`http://localhost:${port}${pathPrefix}`);
});
