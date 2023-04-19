type Add<num1 extends number, num2 extends number> = [...BuildArray<num1>, ...BuildArray<num2>]['length']
type count_array_test1 = Add<2,3>

type Substract<num1 extends number, num2 extends number> = BuildArray<num1> extends [...BuildArray<num2>, ...infer rest] ? rest['length'] : never;
type count_array_test2 = Substract<5,2>

type Multiply<num1 extends number, num2 extends number, result extends unknown[] = []> = num2 extends 0 ? result['length'] : Multiply<num1, Substract<num2, 1>, [...BuildArray<num1>, ...result]>
type count_array_test3 = Multiply<3, 4>

type Divide<num1 extends number, num2 extends number, result extends unknown[] = []> = num2 extends 0 ? result['length'] : Divide<num1, Substract<num2, num1>, [unknown, ...result]>
type count_array_test4 = Divide<4, 12>

type Strlen<str extends string, result extends unknown[] = []> = str extends `${string}${infer rest}` ? Strlen<rest, [...result, unknown]> : result['length']
type count_array_test5 = Strlen<'siuming'>

type GreaterThan<num1 extends number, num2 extends number> = Substract<num1, num2> extends never ? false : true
type count_array_test6 = GreaterThan<5 ,3>

