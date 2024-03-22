/**
 * @CreateTime: 2024/03/20 08:13
 * @Project: blog
 * @Author: aaroncastle
 * @GitHub: https://github.com/aaroncastle/blog
 */

import {createRequire} from "module"
const json = createRequire(import.meta.url);
const file = json('../config/config.json')
console.log(file)


