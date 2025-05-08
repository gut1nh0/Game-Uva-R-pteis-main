let perguntas = [];
let indiceAtual = 0;
let pontuacao = 0;

function carregarPergunta() {
  const p = perguntas[indiceAtual];

  document.getElementById("texto-pergunta").innerText = p.pergunta;
  document.getElementById("numero-pergunta").innerText = `${indiceAtual + 1} de ${perguntas.length} perguntas`;
  document.getElementById("pontuacao").innerText = `Pontuação: ${pontuacao}`;

  const areaImagem = document.getElementById("area-imagem");
  areaImagem.innerHTML = "";
  if (p.imagem) {
    const img = document.createElement("img");
    img.src = p.imagem;
    img.width = 300;
    areaImagem.appendChild(img);
  }

  const areaRespostas = document.getElementById("area-respostas");
  areaRespostas.innerHTML = "";
  const letras = [" A ", " B ", " C ", " D "];
  p.alternativas.forEach((alt, i) => {
    const divResposta = document.createElement("div");
    divResposta.className = "espaco-resposta";
    divResposta.onclick = () => verificarResposta(i);

    const divLetra = document.createElement("div");
    divLetra.className = "letra-resposta";
    divLetra.innerHTML = `<h5>${letras[i]}</h5>`;

    const divTexto = document.createElement("div");
    divTexto.className = "conteudo-resposta";
    divTexto.innerHTML = `<p>${alt}</p>`;

    divResposta.appendChild(divLetra);
    divResposta.appendChild(divTexto);
    areaRespostas.appendChild(divResposta);
  });
}

function verificarResposta(indice) {
  const correta = perguntas[indiceAtual].correta;
  if (indice === correta) pontuacao += 100;

  indiceAtual++;
  if (indiceAtual < perguntas.length) {
    carregarPergunta();
  } else {
    window.location.href = "pagFinal.html";
  }
}

async function carregarPerguntasDoArquivo() {
  try {
    const resposta = await fetch("perguntas.json");
    perguntas = await resposta.json();
    carregarPergunta();
  } catch (erro) {
    console.error("Erro ao carregar as perguntas:", erro);
    document.getElementById("texto-pergunta").innerText = "Erro ao carregar perguntas.";
  }
}

window.onload = carregarPerguntasDoArquivo;
