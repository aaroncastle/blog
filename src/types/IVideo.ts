/**
 * @CreateTime: 2024/03/27 08:33
 * @Project: blog
 * @Author: aaroncastle
 * @Github: https://github.com/aaroncastle/blog
 * @Gitee: https://gitee.com/aaroncastle/blog
 */

import { Document } from "mongoose";
import { Video } from "../entities/Video.js";

export interface IVideo extends Video, Document {
}
