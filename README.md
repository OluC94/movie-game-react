# Reel Impact - Movie Trivia React App

## Link to the app

- The game is hosted on netlify - https://reel-impact.netlify.app/

## How to run locally

- The minimum version of Node required to run this app locally is version 18
- A RapidAPI account is also required to run this app locally
- Subscribe to the Online Movie Database API (https://rapidapi.com/apidojo/api/online-movie-database):

  - Go to the "Pricing" tab
  - Click "Subscribe" under "Basic $0.00 / mo"
  - Return to the "Endpoints" tab and retrieve the API key under "Code Snippets":
    `headers: {
'X-RapidAPI-Key': '<copy the string that appears here>'...`

- Fork and clone this repository
- Create a file in the movie-game folder called `api-info.js` and then create the following variables:
  ```js
  export const key = "<Your personal Rapid API key>";
  export const host = "online-movie-database.p.rapidapi.com";
  export const url = `https://${host}`;
  ```
- In the terminal, cd into `movie-game` and then run `npm i` to install the dependencies
- Run `npm start` to launch the app on the local host
