console.log(`Trabalhando Com Condicionais.`);

const lista_de_destinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idade_comprador = 21;
const acompanhado = false;
const passagem = true;

console.log("Destinos Possiveis:");
console.log(lista_de_destinos);

//Código inicial:
/*if (idade_comprador >= 18){
    console.log("\nComprador Maior de idade.");
    lista_de_destinos.splice(1,1); //Removendo item.
    console.log(lista_de_destinos);
}else if(acompanhado){ //Condicional encadeada.
        console.log("\nComprador está acompanhado.");
        lista_de_destinos.splice(1,1); //Removendo item.
        console.log(lista_de_destinos);
}else{
    console.log("\nComprador não é maior de idade, não posso vender."); 
    };*/

    //Código atualizado com novas regras.
if (idade_comprador >= 18 || acompanhado == true){ //Operador de "ou == ||", onde uma das 2 condições deve ser atendidas.
    console.log("\nComprador maior de idade ou acompanhado.");
    lista_de_destinos.splice(2, 1); //Removendo item.
    console.log(lista_de_destinos);
}
else {
    console.log("\nComprador não é maior de idade, não posso vender.");
};

console.log("Embarque: \n");
if(idade_comprador >= 18 && passagem == true){ //Operador de "e", onde as 2 condições devem ser atedidas.
    console.log("Boa viagem!!!");
}else{
    console.log("Desculpe mas vc nao pode embarcar.");
};