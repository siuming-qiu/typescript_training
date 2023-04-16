type DeepPromiseValueType<T> = T extends Promise<infer value> ? DeepPromiseValueType<value> : T;
type test1 = DeepPromiseValueType<Promise<Promise<number>>> 

type ReverseArr<arr extends unknown[]> = arr extends [infer first, ...infer rest] ? [...ReverseArr<rest>, first] : arr;
type recursion_test2 = ReverseArr<[1,2,3,4,5]>

type IsEuqal<A, B> = (A extends B ? true : false) & (B extends A ? true : false)
type Includes<arr extends unknown[], value> = arr extends [infer first, ...infer rest] ? IsEuqal<first, value> extends true ? true : Includes<rest, value> : false;
type recursion_test3 = Includes<[1,2,3,4], 5> 

type BuildArray<len extends number, ele = unknown, arr extends unknown[] = []> = arr['length'] extends len ? arr : BuildArray<len, ele , [...arr, ele]>
type recursion_test4 = BuildArray<5, 1> 

type ReplaceAll<str extends string, from extends string, to extends string> = str extends `${infer first}${from}${infer rest}` ? ReplaceAll<`${first}${to}${rest}`, from, to> : str;
type recursion_test5 = ReplaceAll<'ming_siuming_siuming', 'siu', 'big'> 

type StringToUnion<str extends string> = str extends `${infer first}${infer rest}` ? first | StringToUnion<rest> : never;
type recursion_test6 = StringToUnion<'siuming'> 

type ReverseStr<str extends string, result extends string = ''> = str extends `${infer first}${infer rest}` ? ReverseStr<rest, `${first}${result}`> : result;
type recursion_test7 = ReverseStr<'siuming'> 