/*
Micro desafio - Passo 1
Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas
(number) e notas (array de números). Crie um construtor para ele e importe-o como o
módulo aluno.
*/

let aluno ={
    nome:"",
    totalFaltas: 0,
    notas: [0],
    mediaNotas: function(listaAlunos) {
        var arr= listaAlunos.notas;
        var divisorMedia = arr.length;
        var Media = arr.reduce(function(calcularMedia,i){
        return calcularMedia+i;        
  });
  return(`As notas do(a) aluno(a) ${listaAlunos.nome} são: ${listaAlunos.notas} com isso sua média é:`, Media/divisorMedia);
      
  
    },
    aumentarFaltas: function(listaAlunos) {
        var falta= listaAlunos.totalFaltas;
        var aumentarFaltas= 1;
        var somarFaltas = (falta + aumentarFaltas);  
         return (`Aluno(a) ${listaAlunos.nome} tinha ${falta} faltas, recebeu mais ${aumentarFaltas} e com isso agora tem: ${somarFaltas} faltas`);
    },
}

  class ModuloAluno {
    constructor(nome, totalFaltas, notas){
        this.nome = nome;
        this.totalFaltas = totalFaltas;
        this.notas = notas; 
             
    } 
    
  }

const aluno1 = new ModuloAluno('Gabriel',2, [3,7,7,1,6]);
const aluno2 = new ModuloAluno('Pietro',1, [3,5,7,8,9]);
const aluno3 = new ModuloAluno('Carol', 2, [8,5,1,10,3]);
const aluno4 = new ModuloAluno("Tamires", 3, [4,8,9,3,10]);

let listaAlunos = [
    aluno1,
    aluno2,
    aluno3,
    aluno4 
];

console.log (listaAlunos);
console.log(aluno.mediaNotas(aluno1));
console.log(aluno.aumentarFaltas(aluno4));

  module.exports = {ModuloAluno,listaAlunos, aluno}; 
