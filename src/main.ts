/**
 * @CreateTime: 2024/03/20 08:13
 * @Project: blog
 * @Author: aaroncastle
 * @GitHub: https://github.com/aaroncastle/blog
 */
import { register } from "node:module";
import { pathToFileURL } from "node:url";
register("ts-node/esm", pathToFileURL("./"));
function test(a:number,b:number):number{
    return a + b;
}

console.log(test(1,20))
