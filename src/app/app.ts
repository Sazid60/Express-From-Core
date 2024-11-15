// const express = require('express')

// we will use import here 
import express, { NextFunction, Request, Response } from 'express'
const app = express()

// to get parsed data we have to use parser
app.use(express.json())
app.use(express.text())

const logger = (req :Request, res:Response, next :NextFunction) =>{
  console.log(req.url, req.method, req.hostname);
  next()
}
app.get('/',logger, (req: Request, res: Response) => {
  res.send('Hello Devvus!')
})

// understanding params
app.get('/:userId', (req: Request, res: Response) => {
  console.log(req.params);
  res.send('Hello!')
})

// understanding more params
app.get('/:userId/:subId', (req: Request, res: Response) => {
  console.log(req.params);
  res.send('Hello!')
})

// understanding of query http://localhost:5000?email=sazid@gmail.com&name=sazid
// app.get('/', (req: Request, res: Response) => {
//   console.log(req.query);
//   console.log(req.query.name);
//   res.send('Hello!')
// })

app.post('/', (req : Request,res :Response) =>{
  // body theke parse kore dehaite hobe so parser use korte hobe
  console.log(req.body);
  // res.send('got data')

  // if we want to send in the format of json we have to use 
  res.json({
    message: "Data Received"
  })
})

export default app