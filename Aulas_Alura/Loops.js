console.log("\nTrabalhando Com Condicionais.");

const lista_de_destinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idade_comprador = 21;
const acompanhado = false;
let passagem = false;
const destino = "Rio de Janeiro";

console.log("\nDestinos Possiveis:");
console.log(lista_de_destinos);

const pode_comprar = idade_comprador >= 18 || acompanhado == true;

let contador = 0;
while(contador<3){
    if(lista_de_destinos[contador] == destino){
        console.log("Destino existe!!!");
    }else{
        console.log("Destino não existe no catálogo.");
    }
    contador += 1;
};