// import { HttpContext } from "@adonisjs/core/build/standalone";

export default class SecurityController {

    async login({ auth, request, response }) {
        const email = request.input('email')
        const password = request.input('password')

        try {
            const token = await auth.use('api').attempt(email, password)
            return token
        } catch {
            return response.badRequest('Invalid credentials')
        }
    }

    async loginWithToken({ auth }) {
        await auth.use('api').authenticated()
    }
}
