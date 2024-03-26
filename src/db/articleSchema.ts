/**
 * @CreateTime: 2024/03/22 17:49
 * @Project: blog
 * @Author: aaroncastle
 * @Github: https://github.com/aaroncastle/blog
 * @Gitee: https://gitee.com/aaroncastle/blog
 */
import { model, plugin, Schema, set } from "mongoose"
import { IArticle } from "../types/IArticle.js";
import mongooseParanoidPlugin from "mongoose-paranoid-plugin"
plugin(mongooseParanoidPlugin, { field: "deletedAt" })
set("strictQuery", true)
const articleSchema = new Schema<IArticle>(
    {
        title: String,
        content: String,
        views: {
            type: Number,
            default: 0,
        },
        toc: [Object],
        picture: String,
    },
    {
        versionKey: false,
        collection: "article",
        timestamps: true,
        // @ts-ignore
        paranoid: true,
    }
)

export const ArticleModel = model<IArticle>("article", articleSchema)
