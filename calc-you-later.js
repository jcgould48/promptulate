


calc = prompt('What do you want to calculate?')

let calcArr = calc.split(' ');
const op = calcArr[0];
const num1 = parseInt(calcArr[1]);
const num2 = parseInt(calcArr[2])

if(calc !== null){
const result = calculate(op, num1, num2);
document.querySelector('h1').innerText = result;
}


