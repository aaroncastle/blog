/**
 * @CreateTime: 2024/03/27 08:35
 * @Project: blog
 * @Author: aaroncastle
 * @Github: https://github.com/aaroncastle/blog
 * @Gitee: https://gitee.com/aaroncastle/blog
 */
interface IWebpInfoData {
    filename: string;
    path: string
}

export interface IWebpInfo {
    width: number;
    height: number;
    fullWebpPath: string;
    data: IWebpInfoData[]
}
