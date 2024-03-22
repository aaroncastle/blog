/**
 * @CreateTime: 2024/03/21 17:16
 * @Project: blog
 * @Author: aaroncastle
 * @Github: https://github.com/aaroncastle/blog
 * @Gitee: https://gitee.com/aaroncastle/blog
 */
import { IUser } from "../types/IUser.js"
export enum permission {
    access = 1,
    reply = 2,
    delete = 4,
    execute = 8,
    supremacy = 16, // 霸权,管理员的权限
}

/**
 * 权限类构造器
 */
export class Permission {
    /**
     * 没有某项权限
     * @param perm 测试的权限
     * @param target 测试的对象
     */
    public static has(perm: permission, target: IUser): boolean {
        return Object.is(target.permission & perm, perm)
    }

    /**
     * 获得某项权限
     * @param perm 要获得的权限
     * @param target 要获得权限的对象
     */
    public static get(perm: permission, target: IUser): Permission {
        target.permission = target.permission | perm
        return this // 返回this为了连续调用
    }

    /**
     * 删除某项权限
     * @param perm 要删除的权限
     * @param target 被删除权限的对象
     */
    public static delete(perm: permission, target: IUser): Permission {
        target.permission = target.permission ^ perm
        return this
    }
}
