// chapter of logic 
// problem number 1 
function avrage(numbers){
    const even = [];
    for(const number of numbers){
        if(number % 2 === 0 ){
            even.push(number);
        }
    }
   let sum = 0 ;
   for(const evenNumber of even ){
    sum += evenNumber;   }
    const count = even.length ;
    // const avarage = sum / count ;
    return count;
}

const numbers = [1 , 2, 3, 4, 5, 6,7,8,9,10];
const result = avrage(numbers);
console.log(result)

