const todos = document.querySelectorAll('.container')
const btn = document.querySelectorAll('.btn-colecao')

function abrirConteudo(idSelecionado, botaoClicado) {
    todos.forEach(div => {
        if (div.id === idSelecionado) {
            div.classList.remove("desativado");
            div.classList.add("ativo")

        } else {
            div.classList.remove("ativo");
            div.classList.add("desativado");
        }
    })

    btn.forEach(botao => {
        if (botao === botaoClicado) {
            botao.classList.add("btn-ativado")
        } else {
            botao.classList.remove("btn-ativado")
        }
    })
}

function abrirTodos(botaoClicado) {
    todos.forEach(div => {
        div.classList.remove("desativado");
        div.classList.add("ativo");
    })

    btn.forEach(botao => {
        if(botao === botaoClicado){
            botao.classList.add("btn-ativado");
        }else{
            botao.classList.remove("btn-ativado");
        }
    });
}
