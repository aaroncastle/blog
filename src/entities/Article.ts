/**
 * @CreateTime: 2024/03/21 16:56
 * @Project: blog
 * @Author: aaroncastle
 * @Github: https://github.com/aaroncastle/blog
 * @Gitee: https://gitee.com/aaroncastle/blog
 */
import { BaseEntity } from "./BaseEntity.js"
import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { Type } from "class-transformer"
import { IAnchor } from "../types/IAnchor.js"


/**
 * 文章类构造器
 */
// @ts-ignore
export class Article extends BaseEntity {
    @IsNotEmpty({ message: "文章标题(title)不能为空" })
    @IsString({ message: "文章标题(title)必须是字符串" })
    @Type(() => String)
    public title: string

    @IsNotEmpty({ message: "文章内容(content)不能为空" })
    @IsString({ message: "文章内容(content)必须是字符串" })
    @Type(() => String)
    public content: string

    @IsInt({ message: "文章浏览量(views)必须是一个正整数" })
    @Type(() => Number)
    public views: number = 0

    @IsNotEmpty({ message: "文章目录(toc)不能为空" })
    @IsArray({ message: "文章目录(toc)必须是数组" })
    @Type(() => Object)
    public toc: IAnchor[]

    public picture?: string

    static transform(obj: object): Article {
        return super.transform<Article>(Article, obj)
    }
}
