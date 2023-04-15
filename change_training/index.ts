type Push<arr extends unknown[], ele> = [...arr, ele] 
type PushResult = Push<[1,2,3], 4>
type Unshift<arr extends unknown[], ele> = [ele, ...arr]
type UnshiftResult = Unshift<[2,3], 1>

type Zip<key extends unknown[], value extends unknown[]> = key extends [infer key1, ...infer restkey] ? value extends [infer value1, ...infer restValue] ? [[key1, value1], ...Zip<restkey, restValue>] : [] : []
type ZipResult = Zip<[1,2], ['string1', 'string2']> 
