//Con while
let cont = 0;

while (cont <=10 ){
    if(cont % 2 == 0)
    console.log(cont);
    cont++;
}
console.log('final del ciclo');

//do while
let cont2 = 0;

do{
    if(cont2 % 2 == 0)
    console.log(cont2);
    cont2++;
    
}while(cont2 <= 10);
console.log('fin del ciclo')

//For
let cont3 = 0;

for(cont3; cont3 <=10; cont3++){
    if(cont3 % 2 == 0){
    console.log(cont3);
    break;
    }
}
console.log('fin del coclo')