import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Post from "App/Models/Post"
import PostValidator from 'App/Validators/PostValidator'


export default class PostsController {

    async index() {
        return await Post.all()
    }

    async show ({ params, response } : HttpContextContract) {
        const post = await Post.findOrFail(params.id)

        response.json({
            message: 'The post you\'re looking for!',
            data: post
        })
    }

    async store ({ request, response } : HttpContextContract) {
        const payload = await request.validate(PostValidator)
        const id = 1

        const post = new Post()
        await post.fill({ title: payload.title, content: payload.content, user_id: id}).save()

        response.json({
            message: 'New post sucessfully created!',
            data: payload
        })
    }

    async edit ({ params, request, response } : HttpContextContract) {
        const payload = await request.validate(PostValidator)

        const post = await Post.findOrFail(params.id)
        await post.merge({ title: payload.title, content: payload.content }).save()

        response.json({
            message: 'The post has been successfully updated!',
            data: payload
        })
    }

    async destroy ({ params, response } : HttpContextContract) {
        const post = await Post.findOrFail(params.id)
        await post.delete()

        response.json({
            message: 'The post has been successfully deleted:',
            data: post
        })
    }
}
