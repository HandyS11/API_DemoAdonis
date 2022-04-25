// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import User from "App/Models/User"

export default class SecurityController {

    async login({ auth, request, response }) {
        const email = request.input('email')
        const password = request.input('password')

        /*const user = User.create({
            email: "valentin-clergue@orange.fr",
            password: "azerty"
        })*/

        try {
            const token = await auth.use('api').attempt(email, password)
            return token
        } catch {
            return response.badRequest('Invalid credentials')
        }
    }
}
