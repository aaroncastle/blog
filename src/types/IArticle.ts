/**
 * @CreateTime: 2024/03/22 17:50
 * @Project: blog
 * @Author: aaroncastle
 * @Github: https://github.com/aaroncastle/blog
 * @Gitee: https://gitee.com/aaroncastle/blog
 */
import { Article } from "../entities/Article.js"
import { Document } from "mongoose"

export interface IArticle extends Article, Document {}
