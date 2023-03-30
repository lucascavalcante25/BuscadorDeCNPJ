const btnBuscar = document.getElementById('buscar');
const inputCnpj = document.getElementById('cnpj');
const divResultado = document.querySelector('.resultado');
const pDados = document.getElementById('dados');

btnBuscar.addEventListener('click', () => {
  const cnpj = inputCnpj.value.replace(/[^\d]+/g,'');
  if (cnpj.length != 14) {
    alert('CNPJ inválido');
    return;
  }
  fetch(`http://localhost:3000/cnpj/${cnpj}`)
    .then(response => response.json())
    .then(data => {
      pDados.innerText = `Razão Social: ${data.nome}\n` +
                          `Endereço: ${data.logradouro}, ${data.numero} - ${data.bairro}, ` +
                          `${data.municipio} - ${data.uf}, CEP: ${data.cep}\n` +
                          `Situação: ${data.situacao}`;
      divResultado.style.display = 'block';
    })
    .catch(error => {
      alert('Erro ao consultar o CNPJ');
      console.error(error);
    });
});
