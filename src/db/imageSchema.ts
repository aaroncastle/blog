/**
 * @CreateTime: 2024/03/27 08:30
 * @Project: blog
 * @Author: aaroncastle
 * @Github: https://github.com/aaroncastle/blog
 * @Gitee: https://gitee.com/aaroncastle/blog
 */
import { IImage } from "../types/IImage.js"
import { model, plugin, Schema, set } from "mongoose"
import mongooseParanoidPlugin from "mongoose-paranoid-plugin"

plugin(mongooseParanoidPlugin, {field: "deletedAt"})
set("strictQuery", true)
const imageSchema = new Schema<IImage>(
    {
        src: String,
        placeholder: String,
        alt: String,
        private: Boolean,
        author: String,
        size: Number,
        width: Number,
        height: Number,
        backServer: String,
        NSFW: Boolean,
        tags: [ String ],
    },
    {
        versionKey: false,
        collection: "image",
        timestamps: true,
        // @ts-ignore
        paranoid: true,
    }
)

export default model<IImage>("Image", imageSchema)
