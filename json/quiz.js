

// function carregarPergunta() {
//   const p = perguntas[indiceAtual];

//   document.getElementById("texto-pergunta").innerText = p.pergunta;
//   document.getElementById("numero-pergunta").innerText = `${indiceAtual + 1} de ${perguntas.length} perguntas`;
//   document.getElementById("pontuacao").innerText = `Pontuação: ${pontuacao}`;

//   const areaImagem = document.getElementById("area-imagem");
//   areaImagem.innerHTML = "";
//   if (p.imagem) {
//     const img = document.createElement("img");
//     img.src = p.imagem;
//     img.width = 300;
//     areaImagem.appendChild(img);
//   }

//   const areaRespostas = document.getElementById("area-respostas");
//   areaRespostas.innerHTML = "";
//   const letras = [" A ", " B ", " C ", " D "];
//   p.alternativas.forEach((alt, i) => {
//     const divResposta = document.createElement("div");
//     divResposta.className = "espaco-resposta";
//     divResposta.onclick = () => verificarResposta(i);

//     const divLetra = document.createElement("div");
//     divLetra.className = "letra-resposta";
//     divLetra.innerHTML = `<h5>${letras[i]}</h5>`;

//     const divTexto = document.createElement("div");
//     divTexto.className = "conteudo-resposta";
//     divTexto.innerHTML = `<p>${alt}</p>`;

//     divResposta.appendChild(divLetra);
//     divResposta.appendChild(divTexto);
//     areaRespostas.appendChild(divResposta);
//   });
// }

// function verificarResposta(indice) {
//   const correta = perguntas[indiceAtual].correta;
//   if (indice === correta) pontuacao += 100;

//   indiceAtual++;
//   if (indiceAtual < perguntas.length) {
//     carregarPergunta();
//   } else {
//     window.location.href = "pagFinal.html";
//   }
// }

// async function carregarPerguntasDoArquivo() {
//   try {
//     const resposta = await fetch("perguntas.json");
//     perguntas = await resposta.json();
//     carregarPergunta();
//   } catch (erro) {
//     console.error("Erro ao carregar as perguntas:", erro);
//     document.getElementById("texto-pergunta").innerText = "Erro ao carregar perguntas.";
//   }
// }

// window.onload = carregarPerguntasDoArquivo;


//Fazendo o javaScript correto



const elementoPergunta = document.getElementById("pergunta");
const respostaBtn = document.getElementById("respostas");
const nextBtn = document.getElementById("next-btn");
const elementoQuiz = document.getElementById("caixa");

const style = ('../CSS/pergunta-sem-img.css');
const styleImg = ('../CSS/vf-com-img.css');
const styleVF = ('../CSS/vf-sem-img.css');
const styleVFimg = ('../CSS/vf-com-img.css');

let perguntas = [];
let perguntaAtual = 0;
let score = 0;

function startQuiz(){
  perguntaAtual = 0;
  score = 0;
  mostraPergunta();

}

function verificaStyle(){
  if (imagem !=null && alternativas.length == 4) {
    elementoQuiz.classList.add(styleImg);
  }
  else if (imagem ==null && arternativas.length == 4){
    elementoQuiz.classList.add(style);
  }

  else if(imagem !=null && alternativas.length < 4){
    elementoQuiz.classList.add(styleVFimg);
  }

  else if(Imagem ==null && alternativas.length < 4){
    elementoQuiz.classList.add(styleVF)
  }
}

function mostraPergunta(){
  resetEstado();
  let perguntaAtual = perguntas[perguntaAtual];
  let numeroPergunta = perguntaAtual + 1;
  elementoPergunta.innerHTML = numeroPergunta + "." + perguntaAtual.pergunta;

  perguntaAtual.perguntas.forEach(alternativas =>{
    const botao = document.createElement("button");
    botao.innerHTML = alternativas.text;
    elementoQuiz.classList.add(verificaStyle())
    botaoResposta.appendChild(button);
    if(alternativas.certa){
      button.dataset.certa = alternativas.certa
    }
    button.addEventListener("click", selecionar)
  })

}

function resetEstado(){
    while(botaoResposta.firstChild){
      botaoResposta.removeChild(botaoResposta.firstChild);
    }
}

function selecionar(e){
  const botaoSelecionado = e.target;
  const correta = perguntas[perguntaAtual].correta;
  if (indice === correta) pontuacao += 100;

  indiceAtual++;

}

startQuiz()