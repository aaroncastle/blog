/**
 * @CreateTime: 2024/03/21 17:00
 * @Project: blog
 * @Author: aaroncastle
 * @Github: https://github.com/aaroncastle/blog
 * @Gitee: https://gitee.com/aaroncastle/blog
 */
import { IsNotEmpty, IsString } from "class-validator"
import { Type } from "class-transformer"
import { BaseEntity } from "./BaseEntity.js"

/**
 * 回复类构造器
 */
// @ts-ignore
export class Comment extends BaseEntity {
    @IsNotEmpty({ message: "回复文章id(blogId)不能为空" })
    @IsString({ message: "回复文章id(blogId)只能是字符串" })
    @Type(() => String)
    blogId: string

    @IsNotEmpty({ message: "回复内容(content)不能为空" })
    @IsString({ message: "回复内容(content)只能是字符串" })
    @Type(() => String)
    content: string

    @IsNotEmpty({ message: "用户id(userid)不能为空" })
    @IsString({ message: "用户id(userid)只能是字符串" })
    @Type(() => String)
    userid: string

    @IsNotEmpty({ message: "回复id(replyId)不能为空" })
    @IsString({ message: "回复id(replyId)只能是字符串" })
    @Type(() => String)
    replyId?: string // 没有replyId就是正常回复文章

    static transform(obj: object) {
        return super.transform<Comment>(Comment, obj)
    }
}
