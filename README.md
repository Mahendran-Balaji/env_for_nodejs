
## Setup .env for Node JS project

Step 1: Setup new npm package

```bash
  npm init
```
Step 2 : Install the following package: dotenv

```bash
 npm install dotenv
```
Step 3: Create a new .env file in the root directory

Step 4: Add Following Code into the .env file

```javascript
PORT_NUMBER=3000
```
Step 5 : To create index.js file add following code

```javascript
const path = require('path');
const express = require("express");
const app = express();
const dotenv = require("dotenv").config({path:path.resolve('.env')});
const env = dotenv.parsed;

const portNumber = env.PORT_NUMBER;

app.get("/", (req, res) => {
  res.send("Hello Friends!");
});

app.listen(portNumber, () => {
  console.log(`Example app listening on port ${portNumber}!`);
});

```
Step 6: Run the application

```bash
  node index.js
```

## Author

- [@Mahendran-Balaji](https://github.com/Mahendran-Balaji/)
