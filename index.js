import express from "express";
import { validateQuery } from './queryMiddleware.js';
const app = express();
const port = process.env.PORT || 3000;

import { rate } from './scrape.js';

app.get("/", (req, res) => {
    res.send("ACCESS KEY IS REQUIRED IF YOU DONT HAVE ONE YET OBTAIN ONE FROM <strong>YEKIASBANI</strong>...");
})

app.get("/:accessKey", validateQuery, (req, res) => {
    if (req.params.accessKey === process.env.ACCESS_KEY) {
        rate(res, req.query.currency.split(','));
    } else {
        res.send("ACCESS KEY IS WRONG")
    }
})

app.get('*', (req, res) => {
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`Sarf Application started successfuly and listening port ${port}`);
})