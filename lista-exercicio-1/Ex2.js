const triangulo = (a,b,c) => {
    if(a<=0 || b<=0 || c<=0){
        return "erro";
    }

    if(a==b && a==c){
       return "Triângulo equilátero!";
    }
    else if((a==b && a!=c) || (a!=b && a==c) || (b==c && b!=a)){
       return "Triângulo isósceles!";
    }
    else{
       return "Triângulo escaleno!";
    }
}

console.log(triangulo(1, 2, 3));