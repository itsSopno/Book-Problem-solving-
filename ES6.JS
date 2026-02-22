// ES6 CHAPTER PROBLEMS , PHASE 1 
PROBLEM NUMBER 1 

function threee(num1 = 0 , num2 = 0 , num3 = 0 ){
    return num1 + num2 + num3 ;
}

const result6 = threee(1,3,2)
console.log(result6)

// // problem number 2 
 function deposit (amount = 50 ){
   if(amount === 0){
    return 'you have only default amount '
   }else if(amount !== undefined){
    return `you have deposited ${amount} taka`
   }else{
    return "you have default amount"
   }

 }
 const result7 = deposit(0)
 console.log(result7)

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

const result8 = employeeDetails("Jhon",  )
console.log(result8) 

// problem number 4 
function Square(number = 1){
    return number * number ;
}

const result9 = Square();
console.log(result9)

// problem nunmber 5 
function product ( num = "undifined" , price = 1){
    if(num !== "undifined" && price === 0){
        return `we have ${num} but we don't have price`
    }else{
        return `we have ${num} and the price is ${price}`
    }
}

const product1 = product("laptop" , 50000)
console.log(product1)