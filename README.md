# TMDB Sample application

This Web App is a demonstration of TMDB's API.

## Prerequisites

- [`node`](https://nodejs.org/en/download/)
- [`npm`](https://www.npmjs.com/get-npm)

## Start the dev server

1. Install the dependencies of the project by running `npm i`
2. You’ll need a [TMDb account](https://www.themoviedb.org/account/signup) to request an API key. Once you are registered, go to account settings and click 'API' in sidebar to get your API key.
3. Choose one of the following ways to start the project depending on your needs

   - [Add your TMDB API key to the project](#add-development-environment-variables) and run `npm start`
   - [Start the project using a without saving the API key into it](#add-temporary-environment-variables)

4. Navigate on your browser to `http://localhost:3000/` to see the application

## Run tests

1. Install the dependencies of the project by running `npm i`
2. You’ll need a [TMDb account](https://www.themoviedb.org/account/signup) to request an API key. Once you are registered, go to account settings and click 'API' in sidebar to get your API key.
3. Execute the tests by running `npm t`

## Features

### Add Development Environment Variables

To define permanent environment variables, create a file called `.env.local` in the root of the project and add your API key:

```
REACT_APP_TMDB_API_KEY=your_api_key
```

### Add Temporary Environment Variables

#### Windows (cmd.exe)

```
set "REACT_APP_TMDB_API_KEY=your_api_key" && npm start
```

(Note: Quotes around the variable assignment are required to avoid a trailing whitespace.)

#### Windows (Powershell)

```
($env:REACT_APP_TMDB_API_KEY = "your_api_key") -and (npm start)
```

#### Linux, macOS (Bash)

```
REACT_APP_TMDB_API_KEY=your_api_key npm start
```
