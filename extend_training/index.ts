type GetFirst<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]] ? First : never;


type GetFirstResult = GetFirst<[1,2,3]>;

type GetFunctionArgs<Fun extends Function> = Fun extends (...args: infer Args) => unknown ? Args : never
type GetFunctionArgsResult = GetFunctionArgs<(num: Number, str: String) => Number>

type GetFunctionRes<Fun extends Function> = Fun extends (...args: any[]) => infer Res ? Res : never
type GetFunctionResResult = GetFunctionRes<(num: Number, str: String) => Number>

class Test {
    name: string;
    constructor() {
        this.name = 'test'
    }
    hello(this: Test) {
        console.log(`hello ${this.name}`)
    }
}
const test = new Test()
type GetThisParmsType<T> = T extends (this: infer ThisType, ...args: any[]) => any ? ThisType: never;
type GetThisParmsTypeResult = GetThisParmsType<typeof test.hello>

interface Person {
    nama: string
}
interface PersonConstructor {
    new(name: string): Person
}
type GetInstanceType<ConstructorType extends new (...args: any) => any> = ConstructorType extends new (...args: any) => infer InstanceType ? InstanceType : unknown
type GetInstanceTypeResult = GetInstanceType<PersonConstructor>

type GetConstructorParameters<ConstructorType extends new (...args: any) => any> = ConstructorType extends new (...args: infer ArgsType) => any ? ArgsType : unknown
type GetConstructorParametersResult = GetConstructorParameters<PersonConstructor>

type GetRefProps<T> = 'ref' extends keyof T ? T extends {ref?: infer RefType | undefined} ? RefType : never : never;
type GetRefPropsResult = GetRefProps<{ref: 222}>