import express from "express";
const app = express();
const port = process.env.PORT || 3000;

import { rate } from './scrape.js';

app.get("/", (req, res) => {
    res.status(404).send("ACCESS KEY IS REQUIRED IF YOU DONT HAVE ONE YET OBTAIN ONE FROM <strong>YEKIASBANI</strong>...");
})

app.get("/:accessKey", (req, res) => {
    if (!req.params.accessKey === process.env.ACCESS_KEY) {
        res.status(404).send("ACCESS KEY IS WRONG...");
    }
    rate(res, req.query.currency.split(','));
})

app.listen(port, () => {
    console.log(`Sarf Application started successfuly and listening port ${port}`);
})