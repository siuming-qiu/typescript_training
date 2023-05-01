type IsAny<T> = string extends (number & T) ? true : false
type special_test1 = IsAny<string>

type IsUnion<A, B = A> = A extends A ? [B] extends [A] ? false : true : never
type special_test2 = IsUnion<1 | 2>

type IsNever<T> = [T] extends [never] ? true : false
type special_test3 = IsNever<never>

type NotEqual<A, B> = 
    (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2)
    ? false : true;
type IsTuple<T> = T extends [...args: infer rest] ? NotEqual<rest['length'], number> : false
type special_test4 = IsTuple<[1,2,3]>