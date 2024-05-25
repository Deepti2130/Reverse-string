const cl = console.log;

//Example -1//

//reverse string -Algorithm-by using methods//
let string = `I Love Javascript`

//1. covert string to array
let arr = string.split("");
cl(arr);

//2.reverse the array
let reverse = arr.reverse();
cl(reverse);

//3.array to string
let revstr = reverse.join("");
cl(revstr);

//**************************************************//

//reverse string -Algorithm-by using methods in the form of function//

let result = str => str.split("").reverse().join("");
cl(result(string));

//Example -2//
// Reverse word//

let result1 = str => str.split(" ").reverse().join(" ");
cl(result1(string));

//Example -3//
//reverse string- by using loop//
let result2 = "";
for(let i=string.length-1; i>= 0; i--){
   // cl(string[i]);

    result2 += string[i]
}
cl(result2);

//Example -4//

//reverse string- by using loop//-by using decrement


const reversestr = (str)=> {
    let result3 = "";
    for(let i=str.length-1; i>=0; i--){
        result3 += string[i]  
    }
    return result3;
}
cl(reversestr(string));


////Example -5//
let stringname = `Deepti`

const restr = (str)=> {
    let result4 = "";
    for(let i=str.length-1; i>=0; i--){
        result4 += stringname [i]  
    }
    return result4;
}
cl(restr(stringname));

//Example -6//

//reverse string by using -spread operator//

let strname = `Samaira`

const rename = (nam) => [...nam].reverse().join("");

cl(rename(strname));

//Example -7//

//reverse string by using -Array.from method//

let strnation = `India is the best country in the world`

const nationinfo = (nation) => Array.from(nation).reverse().join("");

cl(nationinfo(strnation));

//Example-8///

let state = `Maharashtra`;

const reversestr5 = (ele) => {
    let result5 = "";
    for (let i = 0; i < ele.length; i++) {
        result5 = state[i] + result5
}
return result5;
}

cl(reversestr5(state)); 