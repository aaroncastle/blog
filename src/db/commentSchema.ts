/**
 * @CreateTime: 2024/03/27 08:25
 * @Project: blog
 * @Author: aaroncastle
 * @Github: https://github.com/aaroncastle/blog
 * @Gitee: https://gitee.com/aaroncastle/blog
 */

import { model, plugin, Schema, set } from "mongoose"
import { IComment } from "../types/IComment.js"
import mongooseParanoidPlugin from "mongoose-paranoid-plugin"

plugin(mongooseParanoidPlugin, {field: "deletedAt"})
set("strictQuery", true)

const commentSchema = new Schema<IComment>(
    {
        id: String,
        userid: {
            type: String,
            ref: "user",
        },
        content: String,
        replyId: {
            type: String,
            ref: "comment",
        },
    },
    {
        versionKey: false,
        collection: "comment",
        timestamps: true,
        // @ts-ignore
        paranoid: true,
    }
)

export const CommentModel = model<IComment>("comment", commentSchema)
