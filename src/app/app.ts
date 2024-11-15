// const express = require('express')

// we will use import here 
import express, { Request, Response } from 'express'
const app = express()

// to get parsed data we have to use parser
app.use(express.json())
app.use(express.text())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Devvus!')
})

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