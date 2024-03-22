/**
 * @CreateTime: 2024/03/21 16:57
 * @Project: blog
 * @Author: aaroncastle
 * @Github: https://github.com/aaroncastle/blog
 * @Gitee: https://gitee.com/aaroncastle/blog
 */
export interface IAnchor {
    name: string
    anchor: string
    children?: IAnchor[]
}

