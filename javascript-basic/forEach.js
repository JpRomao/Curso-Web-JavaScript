const teste = ['Junior','Sol','Galo'];

teste.forEach((value,index) => console.log(`índice:${index} -> valor:${value}`));


//como funciona o forEach:
Array.prototype.forEach2 = (callback) => {
    for(let i=0;i<this.length;i++){
        callback(this[i],i,this);
    }
}