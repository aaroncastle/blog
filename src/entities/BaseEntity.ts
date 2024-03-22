/**
 * @CreateTime: 2024/03/20 18:58
 * @Project: blog
 * @Author: aaroncastle
 * @GitHub: https://github.com/aaroncastle/blog
 */
import "reflect-metadata"
import { validate } from "class-validator"
import { ClassConstructor, plainToInstance } from "class-transformer"

/**
 * 抽象类
 */
export abstract class BaseEntity {
    public async validateSelf(skipMissingProperties = false): Promise<string[]> {
        const errors = await validate(this, {
            skipMissingProperties,
        })
        const result: string[] = []
        // @ts-ignore
        const temp = errors.map(item => Object.values(item.constraints))
        temp.forEach(item => {
            result.push(...item)
        })
        return result
    }

    protected static transform<T>(cls: ClassConstructor<T>, obj: object): T {
        if (obj instanceof cls) {
            return obj
        } else {
            return plainToInstance(cls, obj)
        }
    }
}

