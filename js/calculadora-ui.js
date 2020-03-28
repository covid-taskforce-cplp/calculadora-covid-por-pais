/**
* O calculadora-ui.js abstrai a comunicação entre o index.html e o
* calculadora-logica.js.
*
* Embora ele não precise ser tão amigável quanto o calculadora-logica.js, a
* escolha de usar jQuery é para facilitar forks ou se alguma pessoa pesquisadora
* quiser contrubuir com a interface também.
*
* @license PUBLIC DOMAIN
*/

console.log('calculadora-ui.js carregado');

// Variaveis Globais (vide calculadora-inicializacao.js):
// - storage


function covidUIAtualizacao(){
  if (document.getElementById('termos-de-uso').checked) {
    covidUIAtualizacaoStorage();
    covidUIAtualizacaoResultado();
  } else {
    console.log('covidUIAtualizacao','termos de uso nao foram aceitos. Negando-se a atualizar interface');
  }
}

/**
 * Atualiza resultados de simulação baseado em dados inseridos pelo usuário
 */
function covidUIAtualizacaoResultado() {
  var populacaoTotal = jQuery('#populacao-total').val().replace(/[^0-9]/g, '');
  var populacaoInfectadaPercentual = jQuery('#populacao-infectada-percentual').val();
  var letalidadeInfeccao = jQuery('#epidemia-letalidade-media').val();
  var populacaoObito = covidLetalidadeSimplificada(populacaoTotal, populacaoInfectadaPercentual, letalidadeInfeccao);

  // https://blog.abelotech.com/posts/number-currency-formatting-javascript/
  function formatNumber(num, isInt) {
    if (isInt) {
      num = parseInt(num, 10);
    }
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  // console.log('populacaoObito', populacaoObito);
  // console.log('populacaoObito', formatNumber(populacaoObito));

  jQuery('#resultado-total-inicial').html(formatNumber(populacaoTotal, true));
  jQuery('#resultado-vivos').html(formatNumber(populacaoTotal - populacaoObito, true));
  jQuery('#resultado-obitos').html(formatNumber(populacaoObito, true));
  console.log('covidUIAtualizacao', populacaoTotal, populacaoInfectadaPercentual, letalidadeInfeccao, populacaoObito);
}

/**
 * Sincroniza o que quer que esteja na interface com localStorage
 */
function covidUIAtualizacaoStorage(){
  var populacaoTotal = jQuery('#populacao-total').val().replace(/[^0-9]/g, '');
  var populacaoInfectadaPercentual = jQuery('#populacao-infectada-percentual').val();
  var letalidadeInfeccao = jQuery('#epidemia-letalidade-media').val();
  storage.set('populacaoTotal', populacaoTotal);
  storage.set('populacaoInfectadaPercentual', populacaoInfectadaPercentual);
  storage.set('letalidadeInfeccao', letalidadeInfeccao);
  console.log(storage);
}

/**
 * Inicializa interface.
 */
function covidUIInicializacao(){
  var populacaoTotal = storage.get('populacaoTotal');
  var populacaoInfectadaPercentual = storage.get('populacaoInfectadaPercentual');
  var letalidadeInfeccao = storage.get('letalidadeInfeccao');
  jQuery('#populacao-total').val(populacaoTotal);
  jQuery('#populacao-infectada-percentual').val(populacaoInfectadaPercentual);
  jQuery('#epidemia-letalidade-media').val(letalidadeInfeccao);
}

/**
 * Limpa dados armazenados no localStorage e recarrega janela
 */
function covidUIResetar() {
  storage.removeAll();
  document.location.reload(true);
}

// O calculo é executado imediatamente quando a página é atualizada
// covidUIAtualizacao();
// jQuery(document).ready(covidUIAtualizacao);

// _____________________________________________________________________________

// Inicializa interface imediatamente
covidUIInicializacao();

// Adiciona ouvinte de eventos em certos elementos chaves da interface
jQuery('#populacao-total, #populacao-infectada-percentual, #epidemia-letalidade-media').on("change", covidUIAtualizacao);
jQuery('#resetar').on("click", covidUIResetar);
jQuery('#formulario-simulacao').on("submit", function(e) {
  covidUIAtualizacao();
  e.preventDefault();
});
