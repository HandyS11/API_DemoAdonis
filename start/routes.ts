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
  Route.delete('/posts/:id', 'PostsController.destroy')
  Route.post('/posts', 'PostsController.store')
  Route.get('/posts', 'PostsController.index')
  Route.get('/posts/:id', 'PostsController.show')
  Route.put('/posts/:id', 'PostsController.edit')
}).middleware('auth')

Route.post('/login', 'SecurityController.login')
 