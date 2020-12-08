const fruta = fruit => {
    switch (fruit){
        default:
            console.log("erro");
            break;
        case "maçã":
            console.log("Não vendemos esta fruta aqui.");
            break;
        case "kiwi":
            console.log("Estamos com escassez de kiwis.");
            break;
        case "melancia":
            console.log("Aqui está, são R$ 3,00 o quilo.");
    }
}

fruta("maçã");
fruta("kiwi");
fruta("melancia");