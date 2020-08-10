const express = require('express');
const open = require('open');

const app = express();
const port = 8000;
const pathPrefix = '/okko-pwa';

app.use(pathPrefix, express.static('../docs'));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
    open(`http://localhost:${port}${pathPrefix}`);
});
