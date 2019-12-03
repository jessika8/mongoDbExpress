# mongoDbExpress
With this project I created a simple login\sign-up form that will save\bring back the information from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## Motivation
I wanted to know how a login\sign-up form works. How can I connect a servet with a database? How difficult it is to change the users information?

## What have i achieved so far?
* I can signup and it stores the data at the MongoDB Atlas
* I can login and it brings the sata back from the database

## How can I make the project better?
* User could change his\hers password
* User could add more data about him\her


## Tech/framework used
* Node.js v10.16.3
* Express.js
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)


## Installation
In the mongoDbExpress-master folder install:

* Use the package manager [npm](https://www.npmjs.com/package/dotenv) to install dotenv
* Use the package manager [npm](https://www.npmjs.com/package/express-handlebars) to install express-handlebars
* Use the package manager [npm](https://www.npmjs.com/package/path) to install path
* Use the package manager [npm](https://www.npmjs.com/package/express) to install express
* Use the package manager [npm](https://www.npmjs.com/package/body-parser) to install body-parser
* Use the package manager [npm](https://www.npmjs.com/package/mongoose) to install mongoose


```bash
npm i dotenv
npm i express-handlebars
npm i path
npm i express
npm i body-parser
npm i mongoose
```

## How to use?
1. Install needed modules
2. In the mongoDbExpress-master folder create a file called .env
3. Create a user with admin privileges at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
4. Copy this to your.env file:
* key = mongodb+srv://username:password@cluster0-iwyl2.mongodb.net/nameofthedatabase?retryWrites=true&w=majority
5. Change the username to your **own username**
6. Change the password to your **admin password**
7. In the mongoDbExpress-master folder run node server.js
8. Open your browser at http://localhost:3000/

## Contribute
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## Credits
Thank you [Code Nation](https://wearecodenation.com/)
