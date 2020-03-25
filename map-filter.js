const number = [3,4,5,6,7];
for (let i = 0; i<number.length; i++){
    const element = number[i];
    const result = element * element;
    console.log(result);
}
// this is the on way.
const num = [3,4,5,6,7];
const output = [];
for(let j = 0; j<num.length; j++){
    const ele = num[j];
    const reslt = ele * ele;
    output.push(reslt);
    
}
console.log(output);


// map 
var m = [3,6,9,4];
var resultOfMap = m.map(function(m){
    return m * m;
})
console.log(resultOfMap);



// arrow function .. we can write here;


var x = x => x * x;
var rusltOfMap = m.map(x);
console.log(rusltOfMap);

// another arrow function ..
rusltOfMap = m.map(z =>z*z);
console.log(rusltOfMap);


// filter .. 
rusltOfFilter = m.filter(z => 5<z);
console.log(rusltOfFilter);