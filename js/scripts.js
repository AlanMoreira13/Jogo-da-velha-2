let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;
// adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {
  // quando alguém clica na caixa
  boxes[i].addEventListener("click", function () {
    let el = checkEl(player1, player2);

    // verifica se já tem x ou o
    if (this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);

      this.appendChild(cloneEl);

      // computar a jogada
      if (player1 == player2) {
        player1++;

        if (secondPlayer == "ai-player") {
          // função executar jogada
          computerPlay();
          player2++;
        }
        // checa quem venceu
      } else {
        player2++;
      }
    }
    checkWinCondition();
  });
}

// evento para saber se é 2 players ou IA
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    secondPlayer = this.getAttribute("id");

    for (let j = 0; j < buttons.length; j++) {
      buttons[j].style.display = "none";
    }

    setTimeout(() => {
      let container = document.querySelector("#container");
      container.classList.remove("hide");
    }, 500);
  });
}

// ver quem vai jogar
function checkEl(player1, player2) {
  if (player1 == player2) {
    // x
    el = x;
  } else {
    // o
    el = o;
  }
  return el;
}

// ve quem ganhou
function checkWinCondition() {
  let block1 = document.querySelector("#block-1");
  let block2 = document.querySelector("#block-2");
  let block3 = document.querySelector("#block-3");
  let block4 = document.querySelector("#block-4");
  let block5 = document.querySelector("#block-5");
  let block6 = document.querySelector("#block-6");
  let block7 = document.querySelector("#block-7");
  let block8 = document.querySelector("#block-8");
  let block9 = document.querySelector("#block-9");
  // horizontal
  if (
    block1.childNodes.length > 0 &&
    block2.childNodes.length > 0 &&
    block3.childNodes.length > 0
  ) {
    let b1Child = block1.childNodes[0].className;
    let b2Child = block2.childNodes[0].className;
    let b3Child = block3.childNodes[0].className;

    if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
      //x
      declareWinner("x");
    } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
      //o
      declareWinner("o");
    }
  }
  if (
    block4.childNodes.length > 0 &&
    block5.childNodes.length > 0 &&
    block6.childNodes.length > 0
  ) {
    let b4Child = block4.childNodes[0].className;
    let b5Child = block5.childNodes[0].className;
    let b6Child = block6.childNodes[0].className;

    if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
      //x
      declareWinner("x");
    } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
      //o
      declareWinner("o");
    }
  }
  if (
    block7.childNodes.length > 0 &&
    block8.childNodes.length > 0 &&
    block9.childNodes.length > 0
  ) {
    let b7Child = block7.childNodes[0].className;
    let b8Child = block8.childNodes[0].className;
    let b9Child = block9.childNodes[0].className;

    if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
      //x
      declareWinner("x");
    } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
      //o
      declareWinner("o");
    }
  }

  // vertical
  if (
    block1.childNodes.length > 0 &&
    block4.childNodes.length > 0 &&
    block7.childNodes.length > 0
  ) {
    let b1Child = block1.childNodes[0].className;
    let b4Child = block4.childNodes[0].className;
    let b7Child = block7.childNodes[0].className;

    if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
      //x
      declareWinner("x");
    } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
      //o
      declareWinner("o");
    }
  }
  if (
    block2.childNodes.length > 0 &&
    block5.childNodes.length > 0 &&
    block8.childNodes.length > 0
  ) {
    let b2Child = block2.childNodes[0].className;
    let b5Child = block5.childNodes[0].className;
    let b8Child = block8.childNodes[0].className;

    if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
      //x
      declareWinner("x");
    } else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
      //o
      declareWinner("o");
    }
  }
  if (
    block3.childNodes.length > 0 &&
    block6.childNodes.length > 0 &&
    block9.childNodes.length > 0
  ) {
    let b3Child = block3.childNodes[0].className;
    let b6Child = block6.childNodes[0].className;
    let b9Child = block9.childNodes[0].className;

    if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
      //x
      declareWinner("x");
    } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
      //o
      declareWinner("o");
    }
  }

  // diagonal
  if (
    block1.childNodes.length > 0 &&
    block5.childNodes.length > 0 &&
    block9.childNodes.length > 0
  ) {
    let b1Child = block1.childNodes[0].className;
    let b5Child = block5.childNodes[0].className;
    let b9Child = block9.childNodes[0].className;

    if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
      //x
      declareWinner("x");
    } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
      //o
      declareWinner("o");
    }
  }
  if (
    block3.childNodes.length > 0 &&
    block5.childNodes.length > 0 &&
    block7.childNodes.length > 0
  ) {
    let b3Child = block3.childNodes[0].className;
    let b5Child = block5.childNodes[0].className;
    let b7Child = block7.childNodes[0].className;

    if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
      //x
      declareWinner("x");
    } else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
      //o
      declareWinner("o");
    }
  }

  // deu velha
  let counter = 0;

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }
  if (counter == 9) {
    declareWinner("Deu velha");
  }
}

// limpa jogo e declara vencedor
function declareWinner(winner) {
  let scoreboardX = document.querySelector("#scoreboard-1");
  let scoreboardY = document.querySelector("#scoreboard-2");
  let msg = "";

  if (winner == "x") {
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    msg = "O jogador 1 venceu! \n Reiniciando partida...";
  } else if (winner == "o") {
    scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
    msg = "O jogador 2 venceu! \n Reiniciando partida...";
  } else {
    msg = "Deu Velha! \n Reiniciando partida...";
  }

  // exibe mensagem
  messageText.innerHTML = msg;
  messageContainer.classList.remove("hide");

  // esconde msg
  setTimeout(() => {
    messageContainer.classList.add("hide");
  }, 3000);

  // zera as jogadas
  player1 = 0;
  player2 = 0;

  // remove x e o
  let boxesToRemove = document.querySelectorAll(".box div");
  for (let i = 0; i < boxesToRemove.length; i++) {
    boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
  }
}

// executar a lógica da jogada do CPU
function computerPlay() {
  let cloneO = o.cloneNode(true);
  counter = 0;
  filled = 0;

  for (let i = 0; i < boxes.length; i++) {
    let randomNumber = Math.floor(Math.random() * 5);

    // só preencher se estiver vazio o filho
    if (boxes[i].childNodes[0] == undefined) {
      if (randomNumber <= 1) {
        boxes[i].appendChild(cloneO);
        counter++;
        break;
      }

      // checagem de quantas estão preenchidas
    } else {
      filled++;
    }
  }

  if (counter == 0 && filled < 9) {
    computerPlay();
  }
}
