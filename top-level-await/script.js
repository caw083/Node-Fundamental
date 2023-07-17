let a;

if (1===1){
    const {smallNumbers, largeNumber} = await import('./script2.js');
    a = largeNumber;
}

const b = 5;

console.log(a + b);