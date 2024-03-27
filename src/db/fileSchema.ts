/**
 * @CreateTime: 2024/03/27 08:28
 * @Project: blog
 * @Author: aaroncastle
 * @Github: https://github.com/aaroncastle/blog
 * @Gitee: https://gitee.com/aaroncastle/blog
 */

import { model, plugin, Schema, set } from "mongoose"
import { IFile } from "../types/IFile.js"
import mongooseParanoidPlugin from "mongoose-paranoid-plugin"

plugin(mongooseParanoidPlugin, {field: "deletedAt"})
set("strictQuery", true)
const fileSchema = new Schema<IFile>(
    {
        src: String,
        name: String,
        private: Boolean,
        backServer: String,
        size: Number,
    },
    {
        versionKey: false,
        collection: "file",
        timestamps: true,
        // @ts-ignore
        paranoid: true,
    }
)

export const FileModel = model("file", fileSchema)
