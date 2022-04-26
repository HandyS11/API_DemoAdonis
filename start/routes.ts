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
  Route.get('/posts', 'PostsController.index')
  Route.get('/posts/:id', 'PostsController.show')
  Route.post('/posts', 'PostsController.store')
  Route.put('/posts/:id', 'PostsController.edit')
  Route.delete('/posts/:id', 'PostsController.destroy')

  Route.get('/users', 'UsersController.index')
  Route.get('/users/:id', 'UsersController.show')
  Route.post('/users', 'UsersController.store')
  Route.put('/users/:id', 'UsersController.edit')
  Route.delete('/users/:id', 'UsersController.destroy')
}).middleware('auth')

Route.get('/setup', 'SecurityController.setup')
Route.post('/login', 'SecurityController.login')