type Bem<block extends string, element extends string[], modifiers extends string[]> = `${block}_${element[number]}_${modifiers[number]}`
type bem_test = Bem<'siuming', ['div', 'span'], ['success', 'fail']>

type Combination<A extends string, B extends string> = A | B | `${A}${B}` | `${B}${A}`
type AllCombinations<A extends string, B extends string = A> = A extends A ? Combination<A, AllCombinations<Exclude<B, A>>> : never
type AllCombinations_test = AllCombinations<'A' | 'B' | 'C'> 