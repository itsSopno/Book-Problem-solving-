// ES6 CHAPTER PROBLEMS , PHASE 1 
// PROBLEM NUMBER 1 

function threee(num1 = 0 , num2 = 0 , num3 = 0 ){
    return num1 + num2 + num3 ;
}

// const result6 = threee(1,3,2)
// console.log(result6)

// problem number 2 
 function deposit (amount = 50 ){
   if(amount === 0){
    return 'you have only default amount '
   }else if(amount !== undefined){
    return `you have deposited ${amount} taka`
   }else{
    return "you have default amount"
   }

 }
//  const result7 = deposit(0)
//  console.log(result7)

// problem number 3 
function employeeDetails (name = "annonymous", monthlySalary = 0 ){
    if(name !== undefined && monthlySalary === 0){
        return `employee is available and we have his salarry is not entered`
    }else if(name !== undefined && monthlySalary !== undefined){
        return `employee is available and we have his salary is ${monthlySalary}`
    }
    else if(name === "annonymous" && monthlySalary === 0){
        return "employee is not available"
    }
    else{
        return " we need employee details "
    }
}

// const result8 = employeeDetails("Jhon",  )
// console.log(result8) 

// problem number 4 
function Square(number = 1){
    return number * number ;
}

// const result9 = Square();
// console.log(result9)

// problem nunmber 5 
function product ( num = "undifined" , price = 1){
    if(num !== "undifined" && price === 0){
        return `we have ${num} but we don't have price`
    }else{
        return `we have ${num} and the price is ${price}`
    }
}

// const product1 = product("laptop" , 50000)
// console.log(product1)

// problem 6 
function Mybook(books = []){
    const defaultBook = "unknown book"
const result = [];
for(let i = 0 ; i < books.length ; i++){
    let book = books[i];
    if( !book || book.length === 0){
        result.push(defaultBook);
    }else{
        result.push(book);
    }
}
return result;
}
// const books = ["book1", "book2", "", "book4", null, undefined, "book7"];
// const result10 = Mybook(books)
// console.log(result10)

// problem number 7 
function bookObject(obj = {}) {
    const defaultBook = "Unknown Book";

    for (const key in obj) {
        let book = obj[key];

        if (!book || (typeof book === "string" && book.trim() === "")) {
            obj[key] = defaultBook;
        }
    }

    return obj;
}
// const bookObj = {
//     book1 : "book1",
//     book2 : "book2",
//     book3 : "",
//     book4 : "book4",}
// const result11 = bookObject(bookObj)
// console.log(result11)

// problem number 8 
function multiply(numbers = []) {
    const defaultNumber = [5, 7, 8];

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        let value;

        if (num === null || num === undefined || (typeof num === "string" && num.trim() === "")) {
            value = defaultNumber[i] ?? 1;
        } else {
            value = num;
        }

        numbers[i] = value * 2; 

    return numbers;
}
}
// const numbers = [1, 2, "", 4, null, 7];
// multiply(numbers);
// console.log(numbers);

// problem number 9 
const number = numbers => {
    return numbers[3];
}
// const numbers = [1, 2, 3, 4, 5];
// const result12 = number(numbers)
// console.log(result12)

// problem number 10 

const getPlase = (num1 , num2 , num3 , num4 ) =>{
    return num1 + num2 + num3 + num4 ;
}

// const result13 = getPlase(1,2,3,4)
// console.log(result13)

// problem number 11 
const getUnknown = () => "unknown" 

// console.log(getUnknown())

// problem number 12 
const Food = (name , price ) =>({
    name : name || "unknown",
    price : price / 5 || 0 ,

})

// const result14 = Food("pizza" , 500)
// console.log(result14)

// problem number 13 
const firstLast = (arr) => {
    const lastIndex = arr.length - 1;
    const firstelement = arr[0];
    const lastelement = arr[lastIndex];
    return firstelement + lastelement;
}

// const arr = [10,12,13,14,15,16,20];
// const result15 = firstLast(arr);
// console.log(result15);

// problem number 14 
const defaultValue = (value1 = "10" , value2 = "5") => {
    const num1 = parseInt(value1);
    const num2 = parseInt(value2);
    return num1 + num2 ;
}
// const result16 = defaultValue("20" )
// console.log(result16)

