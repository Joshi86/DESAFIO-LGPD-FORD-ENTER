// Função que obriga o usuário a ler os termos e condições antes de marcar a checkbox
let termosClicado = false;

document.getElementById("link-termos").addEventListener("click", () => {
  termosClicado = true;
});

document.getElementById("checkbox1").addEventListener("click", function (e) {
  if (!termosClicado) {
    e.preventDefault();
    mostrarModal();
  }
});

function mostrarModal() {
  document.getElementById("modal-alerta").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal-alerta").style.display = "none";
}



// Função que impede que o botão enviar seja ativado até o usuário marcar a checkbox

  document.addEventListener("DOMContentLoaded", function () {
    const checkbox1 = document.getElementById("checkbox1");
    const form = document.querySelector("form");
    const botao = document.querySelector(".botao_contato");

// Função para ativar/desativar o botão

    function verificarEnvioPermitido() {
      if (checkbox1.checked) {
        botao.disabled = false;
      } else {
        botao.disabled = true;
      }
    }

// Escuta mudança no checkbox

    checkbox1.addEventListener("change", verificarEnvioPermitido);

// Inicialmente desativa o botão

    verificarEnvioPermitido();
  });
