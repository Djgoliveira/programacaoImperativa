const {listaEstudantes, Aluno} = require("./alunos");
const { alunos , listaAlunos} = require("./alunos");

const aluno5 = new alunos("Tamires", 3, [4,8,9,3,10]);

let curso = {
    nomeDoCurso: "JavaScript",
    notaAprovacao: 7,
    faltasMaximas: 4,
    listaEstudantes:listaAlunos,    
    addAluno: function(aluno) {
       var novoAluno = listaAlunos.push(aluno);
       return novoAluno;        
    },    
    aprovado: function(aluno) {
        var aprAluno = curso.notaAprovacao;
        console.log(aprAluno);
        var faltas = curso.faltasMaximas;
        console.log(faltas);
       var alunoNotas = alunos[2];
        console.log(alunoNotas);
        var alunoFaltas = listaAlunos.faltas;
       //console.log(alunoFaltas);
       

    },
    listaAprovados: function() {
        // Retornem a lista de alunos aprovados
    }
}
//console.log(curso.addAluno(aluno5));

//console.log (curso.aprovado);
console.log(listaAlunos['Gabriel']);
console.log(listaAlunos[alunos]);
console.log(listaAlunos[1]);
console.log(listaAlunos[2]);