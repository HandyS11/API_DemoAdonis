/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', ({ response }) => {
  response.json({
    greeting: 'Hello world'
  })
})

Route.group(() => {
  Route.post('/posts', 'PostsController.store')
  Route.put('/posts/:id', 'PostsController.edit')
  Route.delete('/posts/:id', 'PostsController.destroy')

  Route.post('/users', 'UsersController.store')
  Route.put('/users/:id', 'UsersController.edit')
  Route.delete('/users/:id', 'UsersController.destroy')

  Route.post('/mongo', 'MongoController.store')
  Route.put('/mongo/:id', 'MongoController.edit')
  Route.delete('/mongo/:id', 'MongoController.destroy')
}).middleware('auth')

Route.get('/posts', 'PostsController.index')
Route.get('/posts/:id', 'PostsController.show')

Route.get('/users', 'UsersController.index')
Route.get('/users/:id', 'UsersController.show')

Route.get('/mongo', 'MongoController.index')
Route.get('/mongo/:id', 'MongoController.show')

Route.get('/setup', 'SecurityController.setup')
Route.post('/login', 'SecurityController.login')
