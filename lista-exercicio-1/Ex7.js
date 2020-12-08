const bhaskaraOperation = (ax, bx, c) => {
    const delta = (bx ** 2) - 4 * ax * c;

    if(delta < 0){
        return "Delta is negative";
    }

    const equation = [(-bx + Math.sqrt(delta)) / (2 * ax), (-bx - Math.sqrt(delta)) / (2 * ax)];

    return `${equation}`;
}

console.log(bhaskaraOperation(1, 12, -13));