/**
 * @CreateTime: 2024/03/21 17:01
 * @Project: blog
 * @Author: aaroncastle
 * @Github: https://github.com/aaroncastle/blog
 * @Gitee: https://gitee.com/aaroncastle/blog
 */

import { IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator"
import { Type } from "class-transformer"
import { BaseEntity } from "./BaseEntity.js"

/**
 * 图片类构造器
 */
// @ts-ignore
export class Image extends BaseEntity {
    @IsString({ message: "图片地址(src)只能是字符串" })
    @IsNotEmpty({ message: "图片地址(src)不能为空" })
    @Type(() => String) // 转换的目标类型
    public src: string

    @IsString({ message: "占位图地址(placeholder)只能是字符串" })
    @IsNotEmpty({ message: "占位图地址(placeholder)不能为空" })
    @Type(() => String) // 转换的目标类型
    public placeholder: string

    @IsNotEmpty({ message: "图片说明内容(alt)不能空" })
    @IsString({ message: "图片说明(alt)只是能字符串" })
    @Type(() => String)
    public alt: string

    @IsNotEmpty({ message: "图片属性(private)不能为空" })
    @IsBoolean({ message: "图片属性(private)只能是布尔值" })
    @Type(() => Boolean)
    public private: boolean = false

    @IsNotEmpty({ message: "图片验证标识符(author)不能为空" })
    @IsString({ message: "图片验证标识符(author)只能是UUID" })
    @Type(() => String)
    public author: string = "public"

    @IsNotEmpty({ message: `图片备份地址(backServer)不能为空` })
    @IsString({ message: "图片备份地址(backServer)只能是字符串" })
    @Type(() => String)
    public backServer: string

    @IsNotEmpty({ message: "图片宽度(width)不能为空" })
    @IsInt({ message: "图片宽度(width)必须是整数" })
    @Type(() => Number)
    public width: number

    @IsBoolean({ message: "NSFW必须是boolean" })
    @Type(() => Boolean)
    public NSFW: boolean = false

    @IsNotEmpty({ message: "图片高度(height)不能为空" })
    @IsInt({ message: "图片高度(height)必须是整数" })
    @Type(() => Number)
    public height: number

    @IsNotEmpty({ message: "图片大小(size)不能为空" })
    @IsInt({ message: "图片大小(size)必须是整数" })
    @Type(() => Number)
    public size: number

    @Type(() => String)
    public tags: string[] = [] // 用于标注关键字，可以快速链接，比如演员的名字，电影的名字

    static transform(obj: object) {
        return super.transform<Image>(Image, obj)
    }
}
