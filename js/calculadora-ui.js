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

function covidUIAtualizacao() {
  var populacaoTotal = jQuery('#populacao-total').val().replace(/[^0-9]/g, '');
  var populacaoInfectadaPercentual = jQuery('#populacao-infectada-percentual').val();
  var letalidadeInfeccao = jQuery('#epidemia-letalidade-media').val();
  var populacaoObito = covidLetalidadeSimplificada(populacaoTotal, populacaoInfectadaPercentual, letalidadeInfeccao);

  // https://blog.abelotech.com/posts/number-currency-formatting-javascript/
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  // console.log('populacaoObito', populacaoObito);
  // console.log('populacaoObito', formatNumber(populacaoObito));
  if (document.getElementById('termos-de-uso').checked) {
    jQuery('#resultado-total-inicial').html(formatNumber(populacaoTotal));
    jQuery('#resultado-vivos').html(formatNumber(populacaoTotal - populacaoObito));
    jQuery('#resultado-obitos').html(formatNumber(populacaoObito));
    console.log('covidUIAtualizacao', populacaoTotal, populacaoInfectadaPercentual, letalidadeInfeccao, populacaoObito);
  } else {
    console.log('covidUIAtualizacao','termos de uso nao foram aceitos. Negando-se a atualizar interface');
  }
  
}

// O calculo é executado imediatamente quando a página é atualizada
// covidUIAtualizacao();
// jQuery(document).ready(covidUIAtualizacao);

jQuery('#populacao-total, #populacao-infectada-percentual, #epidemia-letalidade-media').on("change", covidUIAtualizacao);
jQuery('#formulario-simulacao').on("submit", function(e) {
  covidUIAtualizacao();
  e.preventDefault();
});
