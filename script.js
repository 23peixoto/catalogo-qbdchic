const productAvailability = {
  'airmax': { P: 'Disponível', M: 'Indisponível', G: 'Disponível' }
};

const productData = {
  'airmax': {
    nome: 'Nike Air Max',
    preco: 'R$ 2,00'
  }
};

function checkAvailability(id) {
  const size = document.getElementById(`size-${id}`).value;
  const disponibilidade = productAvailability[id][size];
  document.getElementById(`availability-${id}`).textContent = disponibilidade ?
    `Tamanho ${size} - ${disponibilidade}` : 'Selecione um tamanho';
}

function finalizarCompra(id) {
  const size = document.getElementById(`size-${id}`).value;
  if (!size || productAvailability[id][size] !== 'Disponível') {
    alert("Escolha um tamanho disponível.");
    return;
  }

  const produto = productData[id].nome;
  const valor = productData[id].preco;

  const url = `confirmacao.html?produto=${encodeURIComponent(produto)}&tamanho=${encodeURIComponent(size)}&valor=${encodeURIComponent(valor)}`;
  window.location.href = url;
}
