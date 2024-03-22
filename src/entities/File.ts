/**
 * @CreateTime: 2024/03/22 17:36
 * @Project: blog
 * @Author: aaroncastle
 * @Github: https://github.com/aaroncastle/blog
 * @Gitee: https://gitee.com/aaroncastle/blog
 */
import { BaseEntity } from "./BaseEntity.js"
import { IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator"
import { Type } from "class-transformer"

// @ts-ignore
export class File extends BaseEntity {
    @IsNotEmpty({ message: "文件地址不能为空" })
    @IsString({ message: "文件地址必须是字符串" })
    @Type(() => String)
    public src: string

    @IsNotEmpty({ message: "文件名字不能为空" })
    @IsString({ message: "文件名字必须是字符串" })
    @Type(() => String)
    public name: string

    @IsNotEmpty({ message: "是否私人文件不能为空" })
    @IsBoolean({ message: "私人属性必须是boolean" })
    @Type(() => Boolean)
    public private: boolean

    @IsNotEmpty({ message: "备份服务器服务器不能空" })
    @IsString({ message: "备份服务器地址必须是字符串" })
    @Type(() => String)
    public backServer: string

    @IsNotEmpty({ message: "文件大小不能空" })
    @IsInt({ message: "文件大小必须是整数" })
    @Type(() => Number)
    public size: number

    static transform(obj: object) {
        return super.transform(File, obj)
    }
}

