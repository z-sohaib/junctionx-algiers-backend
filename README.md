<p align="center">
  <a href="https://github.com/z-sohaib/junctionx-algiers-backend">
    <img src="./assets/logo.png" alt="Logo" width="170" height="140">
  </a>

  <h3 align="center"></h3>

  <p align="center">
The Repository for Finvest REST API Made With NodeJS, TypeScript, Express and MongoDB
    <br />
    <br />
    <a href="https://github.com/z-sohaib/junctionx-algiers-backen">View Demo</a>
    ·
    <a href="https://github.com/z-sohaib/junctionx-algiers-backen/issues">Report Bug</a>
    ·
    <a href="https://github.com/z-sohaib/junctionx-algiers-backen/issues">Request Feature</a>
  </p>
</p>

[![Generic badge](https://img.shields.io/badge/version-0.0.1-green.svg)](https://github.com/z-sohaib/junctionx-algiers-backend/blob/main/package.json)

This is a REST API of Finvest app which allows a user to interact with all the data needed to track, manage and improve his financial habits to the best.

## Built With

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Mongo DB](https://www.mongodb.com/)

## Installation

1- Clone the repository to your local machine and cd to it

```bash
  git clone https://github.com/z-sohaib/junctionx-algiers-backend
  cd junctionx-algiers-backend
```

2- Install the project dependencies

```bash
  npm install
```

Or

```bash
  yarn install
```

Or simply

```bash
  yarn
```

3- Launch the development server of the project

```bash
  npm run dev
```

Or

```bash
  yarn dev
```

## Project-Structure

You can find below the followed structure in the project development

```
    /src
        --> /config # Define your configuration for the different additions to the project (For example Firebase setup).
        --> /controllers # Define your controllers that contains handlers of the different routes.
        --> /middlewares # Define custom middlewares that will be used whenever a request is sent.
        --> /models # Define your database models.
        --> /routes # Define your application routes.
        --> /services # Define the business logic layer functions that your route handlers need.
        --> /utils # Define custom functions that serve specific services such as JWT generation.
        --> /utils # Define custom functions that serve types/properties validation.
    .env # Define your project environment variables
    .gitignore # Define which files and folders Git should ignore
    app.ts # The root file of the project
    package.json # Define the node project's configuration
    typescript.json # Define the typescript configuration object
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` => Port to use for the application

`DB_URI` => MongoDB Database URI

`email` => The email to use for sending mails

`emailpassword` => The used email's application password to get access

`private_key` => Private key of Firebase SDK Firebase config

`private_key_id`=> The id of the mentioned key above

`OauthSecret` => Oauth code to use for Google OAuth

## Authors

- [@z-sohaib](https://www.github.com/z-sohaib)

## Feedback

If you have any feedback, please reach out to us at js_zouambia@esi.dz
