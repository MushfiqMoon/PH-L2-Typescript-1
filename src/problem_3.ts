const probThreeFunc = <T extends string[]>(...array: T): T => array.reverse() as T

console.log(probThreeFunc('1', '2', '3', '4', '5'))

// console.log(probThreeFunc(1, 2, 3, 4, 5))
