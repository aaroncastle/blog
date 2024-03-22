/**
 * @CreateTime: 2024/03/21 17:17
 * @Project: blog
 * @Author: aaroncastle
 * @Github: https://github.com/aaroncastle/blog
 * @Gitee: https://gitee.com/aaroncastle/blog
 */
import { Document } from "mongoose";
import { User } from "../entities/User.js";

export interface IUser extends User, Document{}
