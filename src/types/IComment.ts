/**
 * @CreateTime: 2024/03/27 08:26
 * @Project: blog
 * @Author: aaroncastle
 * @Github: https://github.com/aaroncastle/blog
 * @Gitee: https://gitee.com/aaroncastle/blog
 */

import { Comment } from "../entities/Comment.js"
import { Document } from "mongoose"

export interface IComment extends Comment, Document {
}
