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
        const { title, content } = request.body().validate(PostValidator)

        const post = new Post()
        await post.fill({ title: title, content: content}).save()

        response.json({
            message: 'New post sucessfully created!',
            data: post
        })
    }

    async edit ({ params, request, response } : HttpContextContract) {
        const { title, content } = request.body().validate(PostValidator)

        const post = await Post.findOrFail(params.id)
        await post.merge({ title: title, content: content }).save()

        response.json({
            message: 'The post has been successfully updated!',
            data: post
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
