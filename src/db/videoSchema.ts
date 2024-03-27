/**
 * @CreateTime: 2024/03/27 08:33
 * @Project: blog
 * @Author: aaroncastle
 * @Github: https://github.com/aaroncastle/blog
 * @Gitee: https://gitee.com/aaroncastle/blog
 */

import { model, plugin, Schema } from "mongoose"
import { IVideo } from "../types/IVideo.js"
import mongooseParanoidPlugin from "mongoose-paranoid-plugin"

plugin(mongooseParanoidPlugin, {field: "deletedAt"})
const videoSchema = new Schema<IVideo>(
    {
        name: String,
        src: String,
        poster: String,
        thumb: [ String ],
        describe: String,
        author: String,
        private: Boolean,
        NSFW: Boolean,
        actors: [ String ],
        directors: {type: [ String ], default: undefined},
        areas: [ String ],
        timeOfRelease: Number,
        timeLong: Number,
        backServer: String,
        tags: [ String ],
        code: {type: String, default: undefined},
        magnet: {type: String, default: undefined},
        size: Number,
        uncensored: Boolean,
    },
    {
        versionKey: false,
        timestamps: true,
        collection: "video",
        // @ts-ignore
        paranoid: true,
    }
)

export const VideoModel = model<IVideo>("video", videoSchema)
