let usuarios = [];

let funcionario1 = {
    nome :"gera sebo",
    idade : 24,
    email : "gerasebo@gmail.com",
};

if (funcionario1.idade < 0 ) {
    console.log("desculpe, mas o dado está incorreto.")
}
if (funcionario1.nome == undefined ) {
    console.log("desculpe, mas o dado está incorreto.")
}
if (funcionario1.email == undefined ) {
    console.log("desculpe, mas o dado está incorreto.")
}

function adicionarUsuario(){
    usuarios.push(funcionario1)
};

function listarFuncionario(){
    for (let i = 0; i < usuarios.length; i++) {
        console.log("Funcionário " + (i + 1) + ":");
        console.log("Nome: " + usuarios[i].nome);
    }
};

adicionarUsuario()
listarFuncionario()