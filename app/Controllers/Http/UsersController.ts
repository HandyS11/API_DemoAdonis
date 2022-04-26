import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User"


export default class UsersController {

    async index() {
        return await User.all()
    }

    async show ({ params, response } : HttpContextContract) {
        const usr = await User.findOrFail(params.id)

        response.json({
            message: 'The User you\'re looking for!',
            data: usr
        })
    }

    async store ({ request, response } : HttpContextContract) {
        const { name, email, password } = request.body()

        const usr = new User()
        await usr.fill({ name: name, email: email, password: password }).save()     // Ne vérifie pas si l'email est déjà pris ! Crash instant !

        response.json({
            message: 'New User sucessfully created!',
            data: usr
        })
    }

    async edit ({ auth, params, request, response } : HttpContextContract) {
        const { name } = request.body()

        const usr = await User.findOrFail(params.id)

        var message = "Your are not the designed User!"
        if (auth.user?.id == usr.id) {
            await usr.merge({ name: name }).save()
            message = "Your account has been edited!"
        }
        
        response.json({
            message: message,
            data: usr
        })
    }

    async destroy ({ auth, params, response } : HttpContextContract) {
        const usr = await User.findOrFail(params.id)

        var message = "Your are not the designed User!"
        if (auth.user?.id == usr.id) {
            await usr.delete()
            message = "Your account has been deleted!"
        }

        response.json({
            message: message,
            data: usr
        })
    }
}
