console.log("Trabalhando Com Atribuição de Variáveis.\n");

const idade = 39; //Usamos a (const), quando queremos declarar uma variável que sabemos que não irá mudar, essas são boas práticas.
let primeiro_nome = "Wilson"; //Usamos o (let) quando sabemos que iremos mudar a variável.
const sobrenome = "Hipólito";

console.log(primeiro_nome, sobrenome); //A virgula é usada como espaço entre as palavras.
console.log(`Meu nome é: ${primeiro_nome} ${sobrenome}\n`); //Outra forma de escrever string é usando o (`), desta forma podemos usar o (${}) para inserir uma variável.
nome_completo = primeiro_nome + sobrenome; //Se não houvesse nudado a variável "nome" para "let", daria uma msg de erro dizendo que a variável não pode ser modificada. 
console.log(nome_completo);

//O ideal é declarar a variável como "const", e usar o minimo possivel o "let", pois mudar a variável torna dificil de debugar e mais fácil de dar erro no código.
//Ao invés de nudar a variável o correto acima é declarar outra variável, conforma abaixo.

nome_completo = primeiro_nome + sobrenome;
console.log(nome_completo);

//O "let" é bastante usado quando realmente precisamos mudar a variável com frequência, conforme abaixo.
let contador = 0;
contador = contador + 1;
console.log(contador + 10);


