const { listaAlunos , aluno, ModuloAluno} = require('./aluno');
const estudante = require('./estudantes');

const aluno5 = new ModuloAluno("Tamires", 0, [10,8,9,3,10]);
const aluno6 = new ModuloAluno("Gustavo", 2, [1,8,2,3,1]);
const aluno7 = new ModuloAluno("Cleton", 2, [10,8,9,8,71]);

let curso = {
    nomeDoCurso: "JavaScript",
    notaAprovacao: 7,
    faltasMaximas: 5,
    listaEstudantes:estudante,
    addAluno: function(aluno) {
        // Façam a funçao para adicionar um novo aluno
        var novoAluno = listaAlunos.push(aluno);
       return novoAluno;  
    },
    aprovado: function(aluno) {
        // Faça a função aluno aprovado
        var aprAluno = curso.notaAprovacao;
        console.log(`A nota de aprovação é ${aprAluno}`);

        var faltas = curso.faltasMaximas;
        console.log(`O máximo de faltas é ${faltas}`);



        let ModuloAluno = aluno.notas;
        //console.log(ModuloAluno);

       var divisorMedia = ModuloAluno.length;
      //console.log(divisorMedia)

        var Media = ModuloAluno.reduce(function(calcularMedia,i){
      return calcularMedia+i; 
            
},);
   //return(Media/divisorMedia); 

    if(Media/divisorMedia>=aprAluno && aluno.totalFaltas < faltas ){
        return  true;
    }else if(aluno.totalFaltas == faltas && 0.7 > aprAluno ){
        return  true;
    }{
        return  false;
    }    
       
    },
    listaAprovados: function(listaEstudantes) {
        const aprovadoReprovado = (listaEstudantes)=>{
            let aprovado = true;
            listaEstudantes.forEach(listaEstudantes =>{
                if (listaEstudantes.Media/divisorMedia>=aprAluno && aluno.totalFaltas < faltas ){
                    return aprovado;
                }else {
                    return false;
                }
            },0)
        }
               
        
    }   

}


console.log(curso.aprovado(aluno7));
console.log(aluno7.totalFaltas)
console.log(curso.listaEstudantes);
