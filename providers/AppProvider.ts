import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor (protected app: ApplicationContract) {
  }

  public register () {
    // Register your own bindings
  }

  public async boot () {
    const mongoose = require('mongoose')
    mongoose.connect(
      'mongodb+srv://HandyS11:azerty@cluster0.u6uwx.mongodb.net/db',    // Ne pas mettre ça en dur
      () => {
        console.log("Connected to MongoDB")
      },
      e => console.error(e)
      )
  }

  public async ready () {
    // App is ready
  }

  public async shutdown () {
    // Cleanup, since app is going down
  }
}
