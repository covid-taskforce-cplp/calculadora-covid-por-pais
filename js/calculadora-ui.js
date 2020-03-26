console.log('calculadora-ui.js pode ser usada para, ao consumir calculadora-logica.js, manipilar interface de usuario')

var populacaoTotal = jQuery('#populacao-total').val().replace(/[^0-9]/g, '');
var populacaoInfectadaPercentual = jQuery('#populacao-infectada-percentual').val();
var letalidadeInfeccao = jQuery('#epidemia-letalidade-media').val();
console.log(populacaoTotal, populacaoInfectadaPercentual, letalidadeInfeccao);

// https://blog.abelotech.com/posts/number-currency-formatting-javascript/
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

var populacaoObito = covidLetalidadeSimplificada(populacaoTotal, populacaoInfectadaPercentual, letalidadeInfeccao);
// console.log('populacaoObito', populacaoObito);
// console.log('populacaoObito', formatNumber(populacaoObito));
jQuery('#resultado-total-inicial').html(formatNumber(populacaoTotal));
jQuery('#resultado-vivos').html(formatNumber(populacaoTotal - populacaoObito));
jQuery('#resultado-obitos').html(formatNumber(populacaoObito));
