// chapter of logic 
// problem number 1 
// function avrage(numbers){
//     const even = [];
//     for(const number of numbers){
//         if(number % 2 === 0 ){
//             even.push(number);
//         }
//     }
//    let sum = 0 ;
//    for(const evenNumber of even ){
//     sum += evenNumber;   }
//     const count = even.length ;
//     // const avarage = sum / count ;
//     return count;
// }

// const numbers = [1 , 2, 3, 4, 5, 6,7,8,9,10];
// const result = avrage(numbers);
// console.log(result)

// problem number 2 

// function multiply (number){
//     const odds = [];
//     for(const num of number ){
//         if(num % 2 === 1 ){
//             const result = num *3 ;
//             odds.push(result);
        
//         }
//     }
//     return odds;
// }  

// const number = [1 , 2, 3, 4, 5, 6,7,8,9,10];
// const result2 = multiply(number);
// console.log(result2);

// problem number 3 
function foundOdd (number){
    const odd = [];
    for(const num of number){
        if(num % 2 === 1 ){
                odd.push(num)

        }
    }
    if(odd.length === 0 ){
        return "there is no odd number"
    }
    return odd
}

const number = [2,4 ,5,6,7,8,13]
const result3 = foundOdd(number)
console.log(result3)