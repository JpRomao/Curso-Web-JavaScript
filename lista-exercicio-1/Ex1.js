const sum = (a, b) => {
    return 'Sum: ' + (a+b);
}
const subtraction = (a, b) => {
    return 'Subtraction: ' + (a-b);
}
const multiply = (a, b) =>{ 
    return 'Multiply: ' + (a*b);
}
const division = (a, b) => {
    return 'Division: ' + (a/b);
}

const calculator = (a, b) => {
    console.log(sum(a, b));
    console.log(subtraction(a, b));
    console.log(multiply(a, b));
    console.log(division(a, b));
}

calculator(10, 5);