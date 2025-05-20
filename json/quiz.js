const elementoPergunta = document.getElementById("pergunta");
const respostaBtn = document.getElementById("respostas");
const elementoQuiz = document.getElementById("caixa");
const elementoPontuacao = document.getElementById("pontuacao");

const styleSemImg = "pergunta-sem-img";
const styleComImg = "vf-com-img";
const styleVF = "vf-sem-img";
const styleVFimg = "vf-com-img";

let perguntas = [
  {
    "tipo": "multipla",
    "pergunta": "Qual é o nome dessa cobra?",
    "imagem": "./img/serpente/q1.png",
    "alternativas": [" Naja ", " Sucuri ", " Cascavel ", " Jibóia "],
    "correta": 2
  },
  {
    "tipo": "multipla",
    "pergunta": "Qual dessas cobras mata suas presas por constrição",
    "imagem": null,
    "alternativas": [" Naja ", " Jibóia ", " Cascavel ", " Cobra-coral "],
    "correta": 1
  },
  {
    "tipo": "multipla",
    "pergunta": "O que faz a cascavel produzir um som característico?",
    "imagem": null,
    "alternativas": ["Ela sibila alto para assustar predadores", "Seu veneno faz um barulho ao ser injetado", "O chocalho em sua cauda vibra", "Suas presas rangem quando mordem"],
    "correta": 2
  },
  {
    "tipo": "vf",
    "pergunta": " Todas as cobras venenosas têm listras coloridas",
    "imagem": null,
    "alternativas": ["Falso", "Verdadeiro"],
    "correta": 0
  },
  {
    "tipo": "multipla",
    "pergunta": "Essa cobra mata suas presas por veneno ou constrição?",
    "imagem": "./img/serpente/q5.png",
    "alternativas": ["Constrição", "Veneno"],
    "correta": 0
  },
  {
    "tipo": "multipla",
    "pergunta": "Qual dessas serpentes pode cuspir veneno",
    "imagem": null,
    "alternativas": ["Sucuri", "Naja", "Piton-real", "Jibóia"],
    "correta": 1
  },
  {
    "tipo": "multipla",
    "pergunta": "A píton-real tem um comportamento defensivo interessante. O que ela faz quando se sente ameaçada?",
    "imagem": null,
    "alternativas": ["Se enrola como uma bola", "Ataca imediatamente", "Finge estar morta", "Expulsa um odor forte"],
    "correta": 0
  },
  {
    "tipo": "multipla",
    "pergunta": "Qual desses lagartos pode regenerar sua cauda?",
    "imagem": null,
    "alternativas": ["Iguana-verde", "Teiú", " Camaleão-pantera", "Dragão-barbudo"],
    "correta": 0
  },
  {
    "tipo": "vf",
    "pergunta": "O teiú é um lagarto carnívoro",
    "imagem": null,
    "alternativas": ["Falso", "Verdadeiro"],
    "correta": 1
  },
  {
    "tipo": "multipla",
    "pergunta": "O que diferencia o camaleão-pantera dos outros lagartos?",
    "imagem": null,
    "alternativas": ["Ele vive na água", "Ele pode mudar de cor", "Ele não tem patas", "Ele se alimenta apenas de frutas"],
    "correta": 1
  },
  {
    "tipo": "multipla",
    "pergunta": "Como esse lagarto se defende de predadores?",
    "imagem": "./img/lagarto/q11.png",
    "alternativas": ["Se fingindo de morto", "Espirrando sangue pelos olhos", "Emitindo um som alto", "Enterrando-se na areia"],
    "correta": 1
  },
  {
    "tipo": "multipla",
    "pergunta": "Qual desses lagartos é originário da Austrália e tem uma aparência 'espinhosa'?",
    "imagem": null,
    "alternativas": ["Dragão-barbudo", "Teiú", " Calango-verde", "Iguana-verde"],
    "correta": 0
  },
  {
    "tipo": "multipla",
    "pergunta": "Como o lagarto-de-chifres assusta seus predadores?",
    "imagem": null,
    "alternativas": ["Inchando seu corpo", "Expelindo sangue pelos olhos", "Emitindo um som alto", "Pulando para longe"],
    "correta": 1
  },
  {
    "tipo": "multipla",
    "pergunta": "Esse lagarto tem uma habilidade especial. Qual é?",
    "imagem": "./img/lagarto/q14.png",
    "alternativas": ["Soltar a cauda", "Mudar de cor", "Voar entre árvores", "Se esconder na areia"],
    "correta": 1
  },
  {
    "tipo": "multipla",
    "pergunta": "O que diferencia a tartaruga-de-couro das outras tartarugas?",
    "imagem": null,
    "alternativas": ["Ela não põe ovos", "Ela tem um casco flexível", "Ela respira debaixo d’água", "Ela pode viver em água doce e salgada"],
    "correta": 1
  },
  {
    "tipo": "multipla",
    "pergunta": "Como o cágado-de-barbicha detecta suas presas?",
    "imagem": null,
    "alternativas": ["Pelo cheiro", "Pelos sons na água", "Pelos pequenos sensores na sua 'barbicha'", "Pela visão noturna aguçada"],
    "correta": 2
  },
  {
    "tipo": "multipla",
    "pergunta": "Essa tartaruga vive na água ou na terra",
    "imagem": "./img/tartaruga/q17.png",
    "alternativas": ["Água", "Terra"],
    "correta": 0
  },
  {
    "tipo": "vf",
    "pergunta": "O jabuti-piranga vive na água.",
    "imagem": null,
    "alternativas": ["Falso", "Verdadeiro"],
    "correta": 0
  },
  {
    "tipo": "multipla",
    "pergunta": "Qual dessas tartarugas se alimenta principalmente de esponjas-do-mar?",
    "imagem": null,
    "alternativas": ["Tartaruga-da-Amazônia", "Tartaruga-mordedora", "Tartaruga-de-pente", "Jabuti-piranga"],
    "correta": 2
  },
  {
    "tipo": "multipla",
    "pergunta": "Essa tartaruga é conhecida por ter um casco diferente. O que o torna especial?",
    "imagem": "./img/tartaruga/q20.png",
    "alternativas": ["Ele é muito pesado", "Ele é flexível e sem escamas", "Ele é venenoso", "Ele é feito de ossos externos"],
    "correta": 1
  },
  {
    "tipo": "multipla",
    "pergunta": "Onde as fêmeas da tartaruga-da-Amazônia colocam seus ovos?",
    "imagem": null,
    "alternativas": ["Em buracos no fundo dos rios", "Nas praias de areia", "Entre folhas das árvores", "Em fendas rochosas"],
    "correta": 1
  },
  {
    "tipo": "vf",
    "pergunta": "Essa mandíbula pertence a um jacaré ou um crocodilo?",
    "imagem": "./img/jacare/q22.png",
    "alternativas": ["Jacaré", "Crocodilo"],
    "correta": 1
  },
  {
    "tipo": "multipla",
    "pergunta": "Qual é o maior jacaré da América do Sul?",
    "imagem": null,
    "alternativas": ["Jacaré-do-pantanal", "Jacaré-açu", "Caiman-de-cara-lisa", "Crocodilo-americano"],
    "correta": 1
  },
  {
    "tipo": "multipla",
    "pergunta": " Qual desses crocodilianos vive na África e pode crescer até 5 metros?",
    "imagem": null,
    "alternativas": ["Jacaré-açu", "Crocodilo-do-nilo", "Gavial", "Jacaré-do-pantanal"],
    "correta": 1
  },
  {
    "tipo": "vf",
    "pergunta": "Os crocodilos possuem mandíbulas mais fracas que os jacarés.",
    "imagem": null,
    "alternativas": ["Falso","Verdadeiro"],
    "correta": 0
  },
  {
    "tipo": "multipla",
    "pergunta": "Esse animal vive em que tipo de ambiente?",
    "imagem": "./img/jacare/q26.png",
    "alternativas": ["Somente em rios de água doce", "Apenas em florestas tropicais", "Pode viver em água doce e salgada", "Somente em pântanos"],
    "correta": 2
  },
  {
    "tipo": "multipla",
    "pergunta": "O jacaré-do-pantanal desempenha um papel importante no equilíbrio ecológico. Como?",
    "imagem": null,
    "alternativas": ["Caçando piranhas e controlando sua população", "Ajudando a espalhar sementes pelo ambiente", "Criando ninhos para outras espécies de répteis", "Protegendo pequenos mamíferos de predadores maiores"],
    "correta": 0
  },
  {
    "tipo": "multipla",
    "pergunta": "Qual crocodiliano tem um focinho extremamente longo e fino, adaptado para capturar peixes?",
    "imagem": null,
    "alternativas": ["Caiman-de-cara-lisa", "Crocodilo-do-nilo", "Gavial", "Jacaré-açu"],
    "correta": 2
  }
];

let perguntaAtual = 0;
let respostasUsuario = new Array(perguntas.length).fill(null);
let score = 0;

function startQuiz() {
  perguntaAtual = 0;
  score = 0;
  respostasUsuario = new Array(perguntas.length).fill(null);
  mostrarPergunta();
  atualizarPontuacao();
}

function aplicaEstilo(pergunta) {
  elementoQuiz.className = ""; // Remove classes anteriores

  if (pergunta.imagem && pergunta.tipo === "multipla") {
    elementoQuiz.classList.add(styleComImg);
  } else if (!pergunta.imagem && pergunta.tipo === "multipla") {
    elementoQuiz.classList.add(styleSemImg);
  } else if (pergunta.imagem && pergunta.tipo === "vf") {
    elementoQuiz.classList.add(styleVFimg);
  } else if (!pergunta.imagem && pergunta.tipo === "vf") {
    elementoQuiz.classList.add(styleVF);
  }
}

function mostrarPergunta() {
  resetEstado();

  const pergunta = perguntas[perguntaAtual];
  aplicaEstilo(pergunta);

  elementoPergunta.innerHTML = `<strong>${perguntaAtual + 1}. ${pergunta.pergunta}</strong>`;

  if (pergunta.imagem) {
    const img = document.createElement("img");
    img.src = pergunta.imagem;
    img.alt = "Imagem da pergunta";
    img.classList.add("imagem-pergunta");
    elementoPergunta.appendChild(img);
  }

  pergunta.alternativas.forEach((alternativa, index) => {
    const botao = document.createElement("button");
    const letra = String.fromCharCode(65 + index); // A, B, C, ...
    botao.innerText = `${letra}. ${alternativa.trim()}`;
    botao.classList.add("btn");
    botao.dataset.index = index;

    // Marcar se já respondeu
    if (respostasUsuario[perguntaAtual] !== null) {
      botao.disabled = true;
      if (index === perguntas[perguntaAtual].correta) {
        botao.classList.add("correto");
      } else if (index === respostasUsuario[perguntaAtual]) {
        botao.classList.add("incorreto");
      }
    }

    botao.addEventListener("click", selecionar);
    respostaBtn.appendChild(botao);
  });
}

function resetEstado() {
  respostaBtn.innerHTML = "";
  elementoPergunta.innerHTML = "";
}

function selecionar(e) {
  const botaoSelecionado = e.target;
  const respostaIndex = parseInt(botaoSelecionado.dataset.index);
  const correta = perguntas[perguntaAtual].correta;

  if (respostasUsuario[perguntaAtual] === null) {
    if (respostaIndex === correta) {
      score += 100;
    }
  }

  respostasUsuario[perguntaAtual] = respostaIndex;
  atualizarPontuacao();

  if (respostaIndex === correta) {
    botaoSelecionado.classList.add("correto");
  } else {
    botaoSelecionado.classList.add("incorreto");
  }

  Array.from(respostaBtn.children).forEach(btn => {
    btn.disabled = true;
    if (parseInt(btn.dataset.index) === correta) {
      btn.classList.add("correto");
    }
  });
}

function atualizarPontuacao() {
  elementoPontuacao.innerText = `Pontuação: ${score}`;
}

function proximaPergunta() {
  if (perguntaAtual < perguntas.length - 1) {
    perguntaAtual++;
    mostrarPergunta();
  } else {
    // Redireciona para a página de resultado com score
    window.location.href = `pagFinal.html?score=${score}`;
  }
}

function voltarPergunta() {
  if (perguntaAtual > 0) {
    perguntaAtual--;
    mostrarPergunta();
  }
}

startQuiz();