/**
 * @CreateTime: 2024/03/21 17:17
 * @Project: blog
 * @Author: aaroncastle
 * @Github: https://github.com/aaroncastle/blog
 * @Gitee: https://gitee.com/aaroncastle/blog
 */

import { IsInt, IsNotEmpty, IsString } from "class-validator"
import { Type } from "class-transformer"
import { BaseEntity } from "./BaseEntity.js"
import {createRequire} from "module";
const userConfig = createRequire(import.meta.url)('../../config/config.json') || {}

/**
 * 用户类构造器
 */
// @ts-ignore
export class User extends BaseEntity {
    @IsNotEmpty({ message: "昵称(nickname)不能为空" })
    @IsString({ message: "昵称(nickname)只能是字符串" })
    @Type(() => String)
    public nickname: string

    @IsNotEmpty({ message: "密码(password)不能为空" })
    @IsString({ message: "密码(password)只能是字符串" })
    @Type(() => String)
    public password: string

    @IsNotEmpty({ message: "头像(avatar)不能为空" })
    @IsString({ message: "头像(avatar)只能是字符串" })
    @Type(() => String)
    public avatar: string = userConfig.defaultAvatar ? userConfig.defaultAvatar : "https://mdrs.oss-cn-hangzhou.aliyuncs.com/upic/00028-2917400270.png"

    @IsString({ message: "邮箱(email)只能是字符串" })
    public email?: string = ""

    @IsNotEmpty({ message: "用户权限(permission)不能为空" })
    @IsInt({ message: "用户权限(permission)只能是integer" })
    @Type(() => Number)
    public permission: number = 7 // 1：访问 2：回复 4：删除 8：执行管理权 16：管理员权限

    public static transform(obj: object) {
        return super.transform<User>(User, obj)
    }
}
