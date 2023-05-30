# Knowledgebage Typescript Questions

### What is TypeScript, and how is it different from JavaScript?
TypeScript is a strongly typed programming language that builds on JavaScript. The difference between JavaScript and Typescript are we have to declaring the data type on Typescript, where we do not need to declaring it on JavaScript. it also help. another feature of typescript is that it points out errors during the time of development

### Can you explain the difference between "interface" and "type" in TypeScript?
Interfaces and Type are very similar in Typescript, though there are some difference 
*.Once we declearing the Interfaces it directly start with `{}` but with type we have to provide `=`
*.If we try to extend the Interfaces use `extends` keyword and on Type we have to use `&`
*.For the primitive type, we use a Type alias and for the object (object, function, array), we will use Interface mostly.

### Can you give an example of how to use generics in TypeScript?
Here is one example of generic 
```
function logData<T>(data: T) {
    console.log("data: ", data);
}

logData(13);
logData("PH");
logData(true);
```
on this logData function whatever argument we pass on this function it takes it as the peremater,
but if we declear it as any type of data

### What is the difference between an "unknown" and "any" type in TypeScript?
TypeScript will not be able to provide type safety once we use `any` as data type. It is a useful way to get past errors. And if we use `any` type data auto-completion will not work.

On the other hand `unknown` is best practice to use when we don’t know the type of data being typed. To add a type later, we will need to cast it.

### What is the "as" keyword used for in TypeScript?
`as` Key word is represent the Type assertion in Typescript,it is used to tell the compiler that we want to treat `any` as a number, or string
here is an example of as keyword 
```
let assume: any 

assume = "Level Two"
  
let another = (assume as string).length
```
### Can you give an example of how to use enums in TypeScript?

Enum is one kind of feature where we can declear type-level extension.It allow to use set of name constants and here is one example of `enum`
```
enum Skills {
  Javascript,
  Typescript,
  PHP
}
```
On the above example, the Skills `enum` defines three named constant values which are : Javascript, Typescript and PHP. And the value of Javascript = 0 Typescript = 1 , PHP = 2

### Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?