/**
 * @CreateTime: 2024/03/27 08:30
 * @Project: blog
 * @Author: aaroncastle
 * @Github: https://github.com/aaroncastle/blog
 * @Gitee: https://gitee.com/aaroncastle/blog
 */

import { Document } from "mongoose";
import { Image } from "../entities/Image.js";

export interface IImage extends Image, Document {
}
