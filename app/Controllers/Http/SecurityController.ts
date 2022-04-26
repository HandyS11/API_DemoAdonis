import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User"

export default class SecurityController {

    async login({ auth, request, response } : HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')

        try {
            const token = await auth.use('api').attempt(email, password)
            return token
        } catch {
            return response.badRequest('Invalid credentials')
        }
    }

    async setup({ response } : HttpContextContract) {
        const usr = await User.create({
            name: "Name",
            email: "email@gmail.com",
            password: "azerty"
        })
        response.json({
            message: 'The User has been created!',
            data: usr
        })
    }
}
