// ES6 CHAPTER PROBLEMS , PHASE 1 
// PROBLEM NUMBER 1 

function threee(num1 = 0 , num2 = 0 , num3 = 0 ){
    return num1 + num2 + num3 ;
}

const result6 = threee(1,3,2)
console.log(result6)

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
 const result7 = deposit(0)
 console.log(result7)