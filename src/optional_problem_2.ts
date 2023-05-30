

type opCondetional = genericAge extends string ? string : number

interface IPerson {
    person_name: string;
    person_age: opCondetional;
}

const developer: IPerson = {
    person_name: 'mushfiq',
    person_age: "2"
}

type genericAge = "two" 

console.log(developer)