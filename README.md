Internet bookstore – final work for Kodilla

## Author
Agnieszka Matyja
- [LinkedIn](https://www.linkedin.com/in/agnieszka-matyja-405623132/)

## Prerequisities
- mongo
- yarn

## Environtment variables
Server is using environment variables DB and PORT to connect to the database.
If absent, "mongodb://localhost:27017/bookstore" and "8000" respectively are used.

## Running locally
yarn install
yarn run start-dev

## Demo on the server
[Link](https://poe-bookstore.herokuapp.com/)

## Discount code
Code for 10% discount is "promo".

## Before pushing to Heroku
- change API_URL in client/src/config.js
- yarn run build-client

