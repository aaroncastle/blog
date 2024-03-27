/**
 * @CreateTime: 2024/03/27 08:29
 * @Project: blog
 * @Author: aaroncastle
 * @Github: https://github.com/aaroncastle/blog
 * @Gitee: https://gitee.com/aaroncastle/blog
 */

import { Document } from "mongoose";
import { File } from "../entities/File.js";

export interface IFile extends File, Document {
}
