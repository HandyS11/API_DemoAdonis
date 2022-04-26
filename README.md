# API_DemoAdonis

Quick demo of an API build with Adonis


## Getting started

> npm install

Then:
- Create a MySQL database named -> 'lucid'
- In `.env` -> check the logs to the database

In the folder project
> npm run dev

> node ace migration:run

In the database insert this code (for better experience)
> INSERT INTO `posts`(`id`, `title`, `content`, `user_id`) VALUES 
> (1, 'Title article n°1', 'Content article n°1', 1), 
> (2, 'Title article n°2', 'Content article n°2', 1), 
> (3, 'Title article n°3', 'Content article n°3', 1), 
> (4, 'Title article n°4', 'Content article n°4', 1), 
> (5, 'Title article n°5', 'Content article n°5', 1)

In **Postman** ;) or a web browser..
> Launch a GET request on `http://localhost:3333/setup`

> Launch a POST request on `http://localhost:/3333/login` with the token of the previous request

Finaly
> Look futher details look `./start/routes.ts`
