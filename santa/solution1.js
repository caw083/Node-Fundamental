const fs = require('fs');

const input = fs.readFileSync('./santa/input.txt', 'utf8')
console.time('santa1')
let count = {
    '(' : 0,
    ')' : 0
}
for (char in input) {
    if (input[char] === '(') {
        count['('] ++
    } else if (input[char] === ')') {
        count[')'] ++
    }
}

console.log(Math.abs(count['('] - count[')']))
console.timeEnd('santa1')

console.log(count)


// fastest solution

// this is the fastest solution because it doesn't have to loop through the entire array 
// it stops as soon as it finds the answer

// reduce is a function that takes in an array and reduces it to a single value
// it takes in a callback function and an initial value

// the callback function takes in two parameters, the accumulator and the currentValue
// the accumulator is the value that is returned by the callback function

fs.readFile('./santa/input.txt', (err, data) => {
    console.time('santa2')
    const directions = data.toString('utf-8');
    const directionArray = directions.split("");
    const answer = directionArray.reduce((acc, currentValue) => {
        if (currentValue === '(') {
            return acc + 1 
        } else if (currentValue === ')') {
            return acc - 1 
        }
        return acc
    }, 0) // 0 is the initial value of acc current value is the currentValue
    console.log('floor:', answer)
    console.timeEnd('santa2')
})

fs.readFile('./santa/input.txt', (err, data) => {
    console.time('santa2')
    const directions = data.toString('utf-8');
    const directionArray = directions.split("");
    let accumulator = 0;
    let counter = 0;

    const answer = directionArray.some((currentValue) => {
        if (currentValue === '(') {
            accumulator += 1;
        } else if (currentValue === ')') {
            accumulator -= 1;
        }
        counter += 1;
        return accumulator < 0;
    } )
    console.log('basement:', counter)
    console.timeEnd('santa2')
})