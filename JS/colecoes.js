const todos = document.querySelectorAll('.container')

function abrirConteudo(idSelecionado, botaoClicado) {
    todos.forEach(div => {
        if (div.id === idSelecionado) {
            div.classList.remove("desativado");
            div.classList.add("ativo");
        } else {
            div.classList.remove("ativo");
            div.classList.add("desativado");
        }
    })
}
    
function abrirTodos(){
    todos.forEach(div =>{
        div.classList.remove("desativado");
        div.classList.add("ativo");
    })
}
