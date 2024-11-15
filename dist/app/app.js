"use strict";
// const express = require('express')
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// we will use import here 
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// to get parsed data we have to use parser
app.use(express_1.default.json());
app.use(express_1.default.text());
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get('/', logger, (req, res) => {
    res.send('Hello Devvus!');
});
// understanding params
app.get('/:userId', (req, res) => {
    console.log(req.params);
    res.send('Hello!');
});
// understanding more params
app.get('/:userId/:subId', (req, res) => {
    console.log(req.params);
    res.send('Hello!');
});
// understanding of query http://localhost:5000?email=sazid@gmail.com&name=sazid
// app.get('/', (req: Request, res: Response) => {
//   console.log(req.query);
//   console.log(req.query.name);
//   res.send('Hello!')
// })
app.post('/', (req, res) => {
    // body theke parse kore dehaite hobe so parser use korte hobe
    console.log(req.body);
    // res.send('got data')
    // if we want to send in the format of json we have to use 
    res.json({
        message: "Data Received"
    });
});
exports.default = app;
