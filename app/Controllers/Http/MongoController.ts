import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

const MongoUser = require("App/Schemas/MongoUser")


export default class MongoController {

    async index({ response }) {
        let users = {}
        let message = 'All the MongoUser!'
        try {
            users = await MongoUser.find().all()
        } catch (e) {
            message = e.message
        }

        response.json({
            message: message,
            data: users
        })
    }

    async show ({ params, response } : HttpContextContract) {
        let user = {}
        let message = 'The MongoUser you are looking for!'
        try {
            user = await MongoUser.find({ email: params.id })
        } catch (e) {
            message = e.message
        }

        response.json({
            message: message,
            data: user
        })
    }

    async store ({ request, response } : HttpContextContract) {
        const { name, age, email, adress } = request.body()

        let user = {}
        let message = 'The MongoUser has been created!'
        try {
            user = await MongoUser.create({ name: name, age: age, email: email, adress: adress })
        } catch (e) {
            message = e.message
        }

        response.json({
            message: message,
            data: user
        })
    }

    async edit ({ params, request, response } : HttpContextContract) {
        const { name, age, adress } = request.body()

        let user = {}
        let message = 'The MongoUser has been updated!'
        try {
            user = await MongoUser.find({ email: params.id }).updateOne({ name: name, age: age, adress: adress })
        } catch (e) {
            message = e.message
        }

        response.json({
            message: message,
            data: user
        })
    }

    async destroy ({ params, response } : HttpContextContract) {
        let user = {}
        let message = 'The MongoUser has been deleted!'
        try {
            user = await MongoUser.deleteOne({ email: params.id })
        } catch (e) {
            message = e.message
        }

        response.json({
            message: message,
            data: user
        })
    }
}
