import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Post from "App/Models/Post"
//import User from 'App/Models/User'
import PostValidator from 'App/Validators/PostValidator'


export default class PostsController {

    async index() {
        return await Post.all()
    }

    async show ({ params, response } : HttpContextContract) {
        const post = await Post.findOrFail(params.id)

        //const name = User.query().preload('name').where('id', post.user_id).firstOrFail()     // ToDo : Fix cette merde
        response.json({
            message: 'The Post you\'re looking for!',
            data: post,
            //"Owner": title
        })
    }

    async store ({ auth, request, response } : HttpContextContract) {
        const payload = await request.validate(PostValidator)
        const id = auth.user?.id
        
        const post = new Post()
        await post.fill({ title: payload.title, content: payload.content, user_id: id}).save()

        response.json({
            message: 'New Post sucessfully created!',
            data: payload
        })
    }

    async edit ({ auth, params, request, response } : HttpContextContract) {
        const payload = await request.validate(PostValidator)

        const post = await Post.findOrFail(params.id)

        var message = "You are not the owner of this article!"
        if (auth.user?.id == post.user_id) {
            await post.merge({ title: payload.title, content: payload.content }).save()
            message = "The Post has been edited!"
        }

        response.json({
            message: message,
            data: payload
        })
    }

    async destroy ({ auth, params, response } : HttpContextContract) {
        const post = await Post.findOrFail(params.id)

        var message = "You are not the owner of this article!"
        if (auth.user?.id == post.user_id) {
            await post.delete()
            message = "The Post has been deleted!"
        }

        response.json({
            message: message,
            data: post
        })
    }
}
