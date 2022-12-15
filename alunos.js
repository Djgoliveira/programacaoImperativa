let aluno = {
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
      var falta = listaAlunos.faltas;
      var aumentarFaltas = 1;
      var somarFaltas = (falta + aumentarFaltas);  
       return (`Aluno(a) ${listaAlunos.nome} tinha ${falta} faltas, recebeu mais ${aumentarFaltas} e com isso agora tem: ${somarFaltas} faltas`);
  },
}
/*
function Aluno(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
  }
  */

  class alunos {
    constructor (nome, faltas , notas){
        this.nome = nome;
        this.faltas = faltas;
        this.notas = notas;
    }
}
  
const aluno1 = new alunos('Gabriel',2, [3,7,7,1,6]);
const aluno2 = new alunos('Pietro',1, [3,5,7,8,9]);
const aluno3 = new alunos('Carol', 2, [8,5,1,10,3]);
const aluno4 = new alunos("Tamires", 3, [4,8,9,3,10]);




let listaAlunos = [
  aluno1,
  aluno2,
  aluno3,
  aluno4
  

];
//console.log (aluno4.notas);
//console.log(aluno.mediaNotas(aluno4));
//console.log(aluno.aumentarFaltas(aluno4));

module.exports = { alunos, listaAlunos};
//module.exports = {listaAlunos, alunos};


