# Express.js From Core
### 7-6 Installing express with typescript
- installation
  1. npm init [This will provide package.json file] 
  2. npm i express
  3. npm i -D typescript [we are using dev dependency since we want to run typescript converting it into javascript]
  4. tsc --init [we are using this to create typescript config file]
  5. create folder src->app->app.ts & server.ts
  6. create dist folder named dist which will hold the converted js files
  7. Configure tsconfig ->  "rootDir": "./src/", "outDir": "./dist", 
  8. Install node typing library npm i -D @types/node
  9. Install express typing library npm i -D @types/express
#### create app.ts :
```javascript
// const express = require('express')
// we will use import here 
import express from 'express'
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app
```
#### create server.ts :
```javascript
import { Server } from "http";
import app from "./app"

const PORT = 5000;

let server : Server;
async function bootStrap() {
    server = app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    })
} 


bootStrap()
```

### 7-7 What is parsers, request and response object

- tsc in command to convert ts to js 
- node dist/app/server.js write in command to run the server
- for each change we have to repeat these . but to automate this we have to write in cmd tsc-w 
- to re run node server automatically we have to use nodemon npm i -D nodemon
- Re run server npm run start:dev in command
- copy the server url and hit in postman

```js
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
```

### 7-8 Middleware in express.js
- Those whose works are reparative will have to be done by middleware
- when we have dynamic data  and we have to search by id we will use 
```js

// postman request http://localhost:5000/56/
// app.ts
app.get('/:userId', (req: Request, res: Response) => {
  console.log(req.params);
  console.log(req.params.userId);
  res.send('Hello!')
})

// postman request http://localhost:5000/56/
// app.ts
app.get('/:userId/:subId', (req: Request, res: Response) => {
  console.log(req.params);
  console.log(req.params.userId);
  res.send('Hello!')
})
```
- I we have to search based on any query we have to use query
```js
// postman route req http://localhost:5000?email=sazid@gmail.com&name=sazid

app.get('/', (req: Request, res: Response) => {
  console.log(req.query);
  console.log(req.query.name);
  res.send('Hello!')
})

```

#### what is middleware?
- It works between request and response
- Takes client request and do some works and sends to next middleware. Woks are passed to next middleware using next() function. at final stage it goes to controller where exist the call back function which sends user response.

```js
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

export default app
```