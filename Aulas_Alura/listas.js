console.log(`Trabalhando Com Listas\n`);

// const salvador = `Salvador`;
// const sao_paulo = `São Paulo`;
// const rio_de_janeiro = `Rio de Janeiro`;
//console.log(`Destinos Possiveis: ${salvador}, ${sao_paulo}, ${rio_de_janeiro}.`);
//Porém a forma acima não é usual e inteligente de resolver a questão de criação de listas, por isso existem as estruturas de dados,"Arrays".

//Como declarar um Array?
const lista_de_destinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`,
    `Cuiabá`
);
console.log(lista_de_destinos);

//Porém essa ainda não é a forma convencional de ficar adicionando os dados na lista, por isso devemos fazer o seguinte.

lista_de_destinos.push(`Macapá`); //Adicionando o ".push", podemos iserir os dados no Array.
console.log(lista_de_destinos);

//Caso precisamos retirar um elemento da lista usamos o comando a seguir.
lista_de_destinos.splice(2,1); //Esse comando precisa de 2 parâmetros, o primeiro é a posição do item a ser expluido e o segundo é o número de itens a serem excluidos a partir da posição inicial.
console.log(lista_de_destinos);
console.log(lista_de_destinos[1]); //Para exibir apenas um elemento da minha lista, podemos utilizar o [] e dentro inserir o número do elemento na lista, assim somente o mesmo será selecionado.

lista_de_destinos.unshift(`Cerquilho`); //Para adicionar um elemento ao início da lista usamos o parâmetro "unshift".
console.log(lista_de_destinos);

let posicao = lista_de_destinos.lastIndexOf(`São Paulo`); //O parâmetro "lastIndexOf", mostra a posição do elemento na lista, muito util quando não sabemos a posição do elemento.
console.log(posicao);

