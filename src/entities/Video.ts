/**
 * @CreateTime: 2024/03/22 17:38
 * @Project: blog
 * @Author: aaroncastle
 * @Github: https://github.com/aaroncastle/blog
 * @Gitee: https://gitee.com/aaroncastle/blog
 */
import { BaseEntity } from "./BaseEntity.js"
import { ArrayMinSize, IsArray, IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator"
import { Type } from "class-transformer"
// @ts-ignore
export class Video extends BaseEntity {
    @IsNotEmpty({ message: "视频名称(name)不能为空" })
    @IsString({ message: "视频名称(name)只能是字符串" })
    @Type(() => String)
    public name: string

    @IsNotEmpty({ message: "视频地址(src)不能为空" })
    @IsString({ message: "视频地址(src)只能是字符串" })
    @Type(() => String)
    public src: string

    @IsNotEmpty({ message: "视频海报(poster)不能为空" })
    @IsString({ message: "视频海报(poster)只能是字符串" })
    @Type(() => String)
    public poster: string

    @IsNotEmpty({ message: "视频缩略图(thumb)不能为空" })
    @IsArray({ message: "视频缩略图(thumb)只能是URL地址的数组" })
    @Type(() => String)
    public thumb: string[]

    @IsNotEmpty({ message: "视频描述(describe)不能为空" })
    @IsString({ message: "视频描述(describe)只能是字符串" })
    @Type(() => String)
    public describe: string

    @IsNotEmpty({ message: "视频所有者(author)不能为空" })
    @IsString({ message: '视频所有者(author)只能是uuid或"public"' })
    @Type(() => String)
    public author: string = "public"

    @IsNotEmpty({ message: "私人标识符(private)不能为空" })
    @IsBoolean({ message: "私人标识符(private)只能是boolean" })
    @Type(() => Boolean)
    public private: boolean

    @IsNotEmpty({ message: "安全标识符(NSFW)不能为空" })
    @IsBoolean({ message: "安全标识符(NSFW)只能是boolean" })
    @Type(() => Boolean)
    public NSFW: boolean

    @IsNotEmpty({ message: "演员(actors)不能为空" })
    @IsArray({ message: "演员表(actors)必须是字符串型数组" })
    @ArrayMinSize(1, { message: "演员(actors)至少有一个，比如演员名字" })
    @Type(() => String)
    public actors: string[]

    @IsArray({ message: "导演(directors)必须是字符串型数组" })
    @Type(() => String)
    public directors?: string[]

    @IsNotEmpty({ message: "上映地区(areas)不能为空" })
    @IsArray({ message: "上映地区(areas)只能是字符串型数组" })
    @Type(() => String)
    public areas: string[]

    @IsNotEmpty({ message: "上映时间(timeOfRelease)不能为空" })
    @IsInt({ message: "上映时间(timeOfRelease)只能是整数比如20120202" })
    @Type(() => Number)
    public timeOfRelease: number

    @IsNotEmpty({ message: "视频时长(timeLong)不能为空" })
    @IsInt({ message: "视频时长(timeLong)只能是整数" })
    @Type(() => Number)
    public timeLong: number

    @IsNotEmpty({ message: "视频备份服务器(backServer)不能为空" })
    @IsString({ message: "视频备份服务器(backServer)只能是字符串" })
    @Type(() => String)
    public backServer: string

    @IsNotEmpty({ message: "视频标识符(tags)不能为空" })
    @IsArray({ message: "视频标识符(tags)只能是字符串型数组" })
    @ArrayMinSize(1, { message: "视频标识(tags)至少有一个，比如'战争','科幻','励志'等，用于类型分类" })
    @Type(() => String)
    public tags: string[]

    @IsString({ message: "代码(code)只能是字符串" })
    @Type(() => String)
    public code?: string

    @IsString({ message: "下载链接(magnet)只能是字符串" })
    @Type(() => String)
    public magnet?: string

    @IsNotEmpty({ message: "视频大小(size)不能为空" })
    @IsInt({ message: "视频大小(size)只能是整数" })
    @Type(() => Number)
    public size: number

    @IsBoolean({ message: "视频审查状态(uncensored)必须是布尔" })
    @IsNotEmpty({ message: "视频审查状态(uncensored)不能为空" })
    @Type(() => Boolean)
    public uncensored: boolean = false

    public static transform(obj: object) {
        return super.transform<Video>(Video, obj)
    }
}

