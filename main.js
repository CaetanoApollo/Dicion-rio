const dadosPalavras = {
  adept: {
    ingles: "Adept",
    portugues: "Adepto",
    descricaoIngles: "Follower or supporter; one who follows or defends the precepts of a religion, an organization, a sports club, an ideology or doctrine: supporter of capitalism; supporter of the Brazilian national team. Something or someone who has been initiated into or has come to know the dogmas, precepts, norms of a religion, sect, doctrine or science.",
    descricaoPortugues: "Seguidor ou partidário; quem segue ou defende os preceitos de uma religião, de uma organização, de um clube esportivo, de uma ideologia ou doutrina: adepto do capitalismo; adepto da seleção brasileira. Algo ou alguém que foi iniciado ou passou a conhecer os dogmas, preceitos, normas de uma religião, seita, doutrina ou ciência.",
    audioIngles: `./audio/audio-ingles/Adept.wav`,
    audioPort: `./audio/audio-port/adepto.wav`
  },
  sycophant: {
    ingles: "Sycophant",
    portugues: "Bajulador",
    descricaoIngles: "Flatterer; one who praises the qualities of another person with some kind of personal interest: the company flatterer doesn't get his promotion.",
    descricaoPortugues: "Adulador; aquele que elogia as qualidades de outra pessoa com algum tipo de interesse pessoal: o bajulador da empresa não consegue sua promoção.",
    audioIngles: `./audio/audio-ingles/sycophant.wav`,
    audioPort: `./audio/audio-port/bajulador.wav`
  },
  disheveled: {
    ingles: "Disheveled",
    portugues: "Desalinhado",
    descricaoIngles: "That is out of alignment; that cannot be aligned. Out of place; untidy. Looking bad; not dressed well; badly dressed. Without care or attention; careless: he turned up for the interview disheveled.",
    descricaoPortugues: "Que se encontra fora do alinhamento; que não se consegue alinhar. Que está fora do local previamente estabelecido; desarrumado. De péssimo aspecto; que não se veste bem; malvestido. Sem cuidado, apuro ou esmero; descuidado: apareceu para a entrevista desalinhado.",
    audioIngles: `./audio/audio-ingles/disheveled.wav`,
    audioPort: `./audio/audio-port/desalinhado.wav`
  },
  grief: {
    ingles: "Grief",
    portugues: "Dor",
    descricaoIngles: "Painful bodily sensation, classified by its type, intensity, character and occurrence: stomach ache; diffuse pain. Suffering caused by a disappointment, the death of someone, a tragedy; grief: the pain of losing one's father.",
    descricaoPortugues: "Sensação corporal penosa, classificada pelo seu tipo, intensidade, caráter e ocorrência: dor de barriga; dor difusa. Sofrimento provocado por uma decepção, pela morte de alguém, por uma tragédia; mágoa: dor de perder o pai.",
    audioIngles: `./audio/audio-ingles/Grief.wav`,
    audioPort: `./audio/audio-port/dor.wav`
  },
  comprehensive: {
    ingles: "Comprehensive",
    portugues: "Abrangente",
    descricaoIngles: "Extensive; encompassing; containing a multitude of things, of information: comprehensive bill.",
    descricaoPortugues: "Extenso; que abrange; que contém uma infinidade de coisas, de informações: projeto de lei abrangente.",
    audioIngles: `./audio/audio-ingles/Comprehensive.wav`,
    audioPort: `./audio/audio-port/abrangente.wav`
  },
  moderate: {
    ingles: "Moderate",
    portugues: "Moderado",
    descricaoIngles: "One who behaves with moderation, restraint, prudence; prudent. Acting in accordance with rules, norms; regimented. Expressing reasonableness, without excess; reasonable: moderate optimism. Of a climate that is not intense, mild, temperate; mild.",
    descricaoPortugues: "Que se comporta com moderação, comedimento, prudência; prudente. Que age tendo em conta regras, normas; regrado. Que expressa razoabilidade, sem excessos; razoável: otimismo moderado. De clima pouco intenso, ameno, temperado; ameno.",
    audioIngles: `./audio/audio-ingles/Moderate.wav`,
    audioPort: `./audio/audio-port/moderado.wav`
  },
  about: {
    ingles: "About",
    portugues: "Sobre",
    descricaoIngles: "on the subject of; concerning.",
    descricaoPortugues: "sobre o assunto; relativo.",
    audioIngles: `./audio/audio-ingles/About.wav`,
    audioPort: `./audio/audio-port/sobre.wav`
  },
  understandable: {
    ingles: "Understandable",
    portugues: "Compreensível",
    descricaoIngles: "That can be understood; capable of being understood; easy or accessible. That can be perceived; intelligible.",
    descricaoPortugues: "Que se consegue compreender; passível de compreensão; fácil ou acessível. Que pode ser percebido; inteligível.",
    audioIngles: `./audio/audio-ingles/Understandable.wav`,
    audioPort: `./audio/audio-port/compreensível.wav`
  },
  widespread: {
    ingles: "Widespread",
    portugues: "Generalizada",
    descricaoIngles: "That has been generalized; that has become common; widespread. That has been distributed; spread: widespread virus.",
    descricaoPortugues: "Que foi alvo de generalização; que se tornou comum; difundido. Que foi distribuído; espalhado: vírus generalizado.",
    audioIngles: `./audio/audio-ingles/Widespread.wav`,
    audioPort: `./audio/audio-port/generalizada.wav`
  },
  clarify: {
    ingles: "Clarify",
    portugues: "Esclarecer",
    descricaoIngles: "To illuminate; to make clear; to spread luminosity: light. The whole house was illuminated by the lamp; the new day was clearing up quickly. To understand; to make clear: the author clarified the doubts. To distinguish; to make relevant; to make important: noble causes clarified him; they needed to clarify themselves in the application of new laws.",
    descricaoPortugues: "Iluminar; fazer ficar claro; disseminar luminosidade: a luz. Do candeeiro esclarecia toda a casa; o novo dia se esclarecia rapidamente. Compreender; tornar elucidativo, claro: o autor esclareceu as dúvidas. Distinguir; fazer com que haja relevância em; tornar importante: as causas nobres esclarecia-o; precisavam esclarecer-se na aplicação de novas leis.",
    audioIngles: `./audio/audio-ingles/Clarify.wav`,
    audioPort: `./audio/audio-port/esclarecer.wav`
  },
};


// Seleciona vários elementos do DOM e os armazena em constantes
const titulo = document.querySelector(".palavra-ingles");
const tituloPort = document.querySelector(".palavra-portugues");
const descricao = document.querySelector(".descricao");
const descricaoPort = document.querySelector(".descricaoPort");
const modal = document.querySelector('#modal');
const content = document.querySelector('.content');
const overlay = document.getElementById('sobreposicao');
const fecharModal = document.getElementById('fechar-modal')

// Função para alternar a exibição do modal entre 'flex' e 'none'
const mudarModal = () => {
  const estiloAtual = modal.style.display.toLowerCase();

  if (estiloAtual === 'flex') {
    modal.style.animation = 'fadeOut 0.6s ease-in-out';
    overlay.style.display = 'none'
    setTimeout(() => {
      modal.style.display = 'none';
    }, 500);

  } else {
    modal.style.display = 'flex';
    modal.style.animation = 'fadeIn 0.5s ease-in-out';
    overlay.style.display = 'block'
  }
};

// Seleciona todos os botões com a classe '.modalBtn' e o botão de fechar
const modalBtns = document.querySelectorAll('.modalBtn');
const closeBtn = document.querySelector('#fechar-modal');
const audioIngles = document.querySelector('#audioIngles');
const audioPort = document.querySelector('#audioPort');

// Adiciona event listeners a todos os botões '.modalBtn'
modalBtns.forEach(btn => {
  btn.addEventListener('mouseover', () => {
    btn.style.cursor = 'pointer';
  });

  btn.addEventListener('click', function (event) {
    event.stopPropagation();
    const palavraSelecionada = this.id.toLowerCase();
    atualizarPalavra(palavraSelecionada);
    
    const elementoIng = document.getElementById('elementoIng');
    const elementoPt = document.getElementById('elementoPt');

    // Inicia a reprodução do áudio quando o mouse passa sobre o elemento
    elementoIng.addEventListener('mouseover', function() {
      audioIngles.src = dadosPalavras[palavraSelecionada].audioIngles;
      audioPort.pause()
      audioIngles.play()
      audioPort.currentTime = 0;
    });

    elementoPt.addEventListener('mouseover', function() {
      audioPort.src = dadosPalavras[palavraSelecionada].audioPort;
      audioIngles.pause()
      audioPort.play()
      audioIngles.currentTime = 0;
    });
    // Exibe o modal
    mudarModal();
  });
});

// Para a reprodução do áudio quando o botão de fechar é clicado
closeBtn.addEventListener('click', function() {
  audioIngles.pause();
  audioPort.pause();
  audioIngles.currentTime = 0;
  audioPort.currentTime = 0;
});

// Alterna a exibição do modal quando o botão de fechar é clicado
fecharModal.addEventListener('click', (e) => {
  mudarModal()
});

// Atualiza o conteúdo dos elementos de título e descrição com as informações da palavra selecionada
function atualizarPalavra(palavra) {
  titulo.textContent = dadosPalavras[palavra].ingles;
  tituloPort.textContent = dadosPalavras[palavra].portugues;
  descricao.textContent = dadosPalavras[palavra].descricaoIngles;
  descricaoPort.textContent = dadosPalavras[palavra].descricaoPortugues;
}