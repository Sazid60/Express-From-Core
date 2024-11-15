"use strict";
// const express = require('express')
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// creating a router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use('/api/v1/users', userRouter);
app.use('/api/v1/courses', courseRouter);
userRouter.get(`/create-user`, (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created successfully",
        data: user,
    });
});
// postman hit http://localhost:5000/api/v1/courses/create-course
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "Course is created successfully",
        data: course,
    });
});
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// app.get('/',logger, async (req: Request, res: Response) => {
//   res.send('Hello Devvus!')
// })
// error handling
app.get('/', logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(something);
    }
    catch (error) {
        // next diye global error handler er kase pathaye dilam
        next(error);
        // console.log(error);
        // res.status(400).json({
        //   success: false,
        //   message: "Failed To Get Data "
        // })
    }
}));
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
app.get('/', logger, (req, res) => {
    console.log(req.query);
    console.log(req.query.name);
    res.send('Hello!');
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
// custom error
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route Not Found"
    });
});
// global error handler
app.use((error, req, res, next) => {
    console.log(error);
    if (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong"
        });
    }
});
exports.default = app;
