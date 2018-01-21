const numbers = [1, 2, 3, 4, 5, 7, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const pair = numbers.filter(function(number) {
    return number % 2 === 0;
})

const pair = numbers.filter(number => { number % 2 === 0 })

console.log(pair);