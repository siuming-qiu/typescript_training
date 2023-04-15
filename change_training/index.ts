type Push<arr extends unknown[], ele> = [...arr, ele] 
type PushResult = Push<[1,2,3], 4>
type Unshift<arr extends unknown[], ele> = [ele, ...arr]
type UnshiftResult = Unshift<[2,3], 1>

type Zip<key extends unknown[], value extends unknown[]> = key extends [infer key1, ...infer restkey] ? value extends [infer value1, ...infer restValue] ? [[key1, value1], ...Zip<restkey, restValue>] : [] : []
type ZipResult = Zip<[1,2], ['string1', 'string2']> 

type CapitalizeStr<str extends string> = str extends `${infer S}${infer rest}` ? `${Uppercase<S>}${rest}` : str;
type CapitalizeStrResult = CapitalizeStr<'siuming'> 
type CamelCase<str extends string> = str extends `${infer left}_${infer right}${infer rest}` ? `${left}${CapitalizeStr<right>}${CamelCase<rest>}` : str;
type CamelCaseResult = CamelCase<'siuming_siuming_siuming'>

type AddFunctionArg<fun extends Function, arg> = fun extends (...args: infer Args) => any ? (...args: [...Args, arg]) => any : never;
type result1 = AddFunctionArg<(name: string, age: number) => any, string> 

type Mapping<obj extends Object> = {
  [key in keyof obj]: [obj[key], obj[key], obj[key]]
}

type UppercaseKey<obj extends Record<string, any>> = {
  [key in keyof obj as Uppercase<key & string>] : obj[key]
}

type ToReadyOnly<T> = {
  readonly [key in keyof T]: T[key]
}
type ToPartial<T> = {
  [key in keyof T]?: T[key]
}
type ToMutable<T> = {
  -readonly [key in keyof T]: T[key]
}
type ToRequired<T> = {
  [key in keyof T]-?: T[key]
}
type FitlerByValue<obj extends Object, ValueType> = {
  [key in keyof obj as obj[key] extends ValueType ? key : never]: obj[key] 
}
type test2 = FitlerByValue<{name: string, age: number}, string> 