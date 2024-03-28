/**
 * @CreateTime: 2024/03/20 08:13
 * @Project: blog
 * @Author: aaroncastle
 * @GitHub: https://github.com/aaroncastle/blog
 */

import { createRequire } from "module"
import { connect } from "mongoose"
import { ArticleModel } from "./db/articleSchema.js";

const json = createRequire(import.meta.url);
const userConfig = json('../config/config.json')

const mongoConfig = userConfig['mongoDBServer'] ? {server: userConfig['mongoDBServer']['domain'],port: userConfig['mongoDBServer']['port']}: {server: 'localhost',port: 27017}
connect(`mongodb://${mongoConfig.server}:${mongoConfig.port}/${ userConfig.mongoDBBasename }`)
    .then(() => {
        console.log("database has been started")
        ArticleModel.find().then(r => console.log(r))
    })
    .catch(_ => {
        console.log("connect database failed，check database port (mongodb database default port is 27017)")
    })

