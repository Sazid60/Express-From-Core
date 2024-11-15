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
app.get('/', (req, res) => {
    res.send('Hello Devvus!');
});
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
