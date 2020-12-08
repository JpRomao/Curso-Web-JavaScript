const bissexto = ano => {
    if(ano%400==0){
        return true;
    }
    else if(ano%100==0){
        return false;
    }
    else if(ano%4){
        return true;
    }
    else{
        return false;
    }
}

bissexto(2002);
bissexto(20015);