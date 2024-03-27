/**
 * @CreateTime: 2024/03/27 08:32
 * @Project: blog
 * @Author: aaroncastle
 * @Github: https://github.com/aaroncastle/blog
 * @Gitee: https://gitee.com/aaroncastle/blog
 */

import { model, plugin, Schema, set } from "mongoose"
import { IUser } from "../types/IUser.js"
import mongooseParanoidPlugin from "mongoose-paranoid-plugin"

plugin(mongooseParanoidPlugin, {field: "deletedAt"})
set("strictQuery", true)
const userSchema = new Schema<IUser>(
    {
        nickname: String,
        password: String,
        avatar: String,
        email: {
            type: String,
            required: false,
        },
        permission: {
            type: Number,
            default: 7,
        },
    },
    {
        versionKey: false,
        collection: "user",
        timestamps: true,
        // @ts-ignore
        paranoid: true,
    }
)

const UserModel = model("user", userSchema)
export { UserModel }
