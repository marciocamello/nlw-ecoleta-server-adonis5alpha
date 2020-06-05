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
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Application from '@ioc:Adonis/Core/Application'

Route.get('/', async () => {
  return { message: 'Ecoleta Server API' }
})

Route.get('/uploads/:image', async ({request, params}) => {
  const filePath = Application.publicPath('uploads')
  const fileName = params.image

  request.headers()['content-type'] = 'image/jpeg'

  return `${filePath}/${fileName}`
})

Route
  .resource('items', 'ItemsController')
  .apiOnly()

Route
  .resource('points', 'PointsController')
  .apiOnly()
