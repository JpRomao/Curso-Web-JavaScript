const verificaDivisivel = number => {
    if(number%3==0){
        return true;
    }
    return false;
}

console.log(verificaDivisivel(3));
console.log(verificaDivisivel(2));
console.log(verificaDivisivel(5));