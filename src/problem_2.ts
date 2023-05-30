interface IprobTwo {
    name: string;
    age: number;
}

const probTwoFunc = (arr: IprobTwo[]): IprobTwo[] => {

    const result: IprobTwo[] = []

    arr.forEach((el: IprobTwo) => {
        if (el.age >= 18) {
            result.push(el)
        }
    })

    return result

}
