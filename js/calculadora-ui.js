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
 * 
 * @TODO  melhor questão de arredondamento. Para populações pequenas nem mesmo
 *        está indicando que existe um percentual (fititnt, 2020-03-28 06:40 BRT)
 */
function covidUIAtualizacaoResultado() {

  // https://blog.abelotech.com/posts/number-currency-formatting-javascript/
  function formatNumber(num, isInt) {
    if (isInt) {
      num = parseInt(num, 10);
    }
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  // console.log('populacaoObito', populacaoObito);
  // console.log('populacaoObito', formatNumber(populacaoObito));
  if (jQuery('#populacao-simples')[0].checked) {
    var populacaoTotal = jQuery('#populacao-total').val().replace(/[^0-9]/g, '');
    var populacaoInfectadaPercentual = jQuery('#populacao-infectada-percentual').val();
    var letalidadeInfeccao = jQuery('#epidemia-letalidade-media').val();
    var populacaoObito = covidLetalidadeSimplificada(populacaoTotal, populacaoInfectadaPercentual, letalidadeInfeccao);
    jQuery('#resultado-total-inicial').html(formatNumber(populacaoTotal, true));
    jQuery('#resultado-vivos').html(formatNumber(populacaoTotal - populacaoObito, true));
    jQuery('#resultado-obitos').html(formatNumber(populacaoObito, true));
    console.log('covidUIAtualizacao', populacaoTotal, populacaoInfectadaPercentual, letalidadeInfeccao, populacaoObito);
  } else {
    // alert('ainda nao implementado, lamento');
    covidUIAtualizacaoResultadoItem('-de-0-ate-10', 'De0Ate10');
    covidUIAtualizacaoResultadoItem('-de-11-ate-20', 'De11Ate20');
    covidUIAtualizacaoResultadoItem('-de-21-ate-30', 'De21Ate30');
    covidUIAtualizacaoResultadoItem('-de-31-ate-40', 'De31Ate40');
    covidUIAtualizacaoResultadoItem('-de-41-ate-50', 'De41Ate50');
    covidUIAtualizacaoResultadoItem('-de-51-ate-60', 'De51Ate60');
    covidUIAtualizacaoResultadoItem('-de-71-ate-80', 'De71Ate80');
    covidUIAtualizacaoResultadoItem('-de-81-ate-120', 'De81Ate120');
  }
}

function covidUIAtualizacaoResultadoItem(id_suffix, var_suffix) {
  var populacaoTotal = jQuery('#populacao-total' + id_suffix).val().replace(/[^0-9]/g, '');
  var populacaoInfectadaPercentual = jQuery('#populacao-infectada-percentual').val(); // TODO: flexibilizar...
  var letalidadeInfeccao = jQuery('#epidemia-letalidade-media').val(); // TODO: flexibilizar...
  console.log('covidUIAtualizacaoResultadoItem', populacaoTotal, populacaoInfectadaPercentual, letalidadeInfeccao);
  var populacaoObito = covidLetalidadeSimplificada(populacaoTotal, populacaoInfectadaPercentual, letalidadeInfeccao);
  function formatNumber(num, isInt) {
    if (isInt) {
      num = parseInt(num, 10);
    }
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  jQuery('#resultado-total-inicial' + id_suffix).html(formatNumber(populacaoTotal, true));
  jQuery('#resultado-vivos' + id_suffix).html(formatNumber(populacaoTotal - populacaoObito, true));
  jQuery('#resultado-obitos' + id_suffix).html(formatNumber(populacaoObito, true));
  console.log('covidUIAtualizacao [' + id_suffix  + '][' + var_suffix + ']', populacaoTotal, populacaoInfectadaPercentual, letalidadeInfeccao, populacaoObito);
}

function covidUIAtualizacaoPredefinidaCenario(ev){
  var nome_variavel = jQuery(ev.target).children("option:selected").data('var');
  if (!nome_variavel) {
    return '';
  }
  var dados = window[nome_variavel];
  console.log('covidUIAtualizacaoPredefinidaCenario', nome_variavel, dados);

  jQuery('#cenario-metadata').html(dados._metadata);
  jQuery('#populacao-infectada-percentual').val(dados.populacaoInfectadaPercentual);
  jQuery('#epidemia-letalidade-media').val(dados.letalidadeInfeccao);
}

function covidUIAtualizacaoPredefinidaPopulacao(ev){
  var nome_variavel = jQuery(ev.target).children("option:selected").data('var');
  var dados = window[nome_variavel];
  console.log('covidUIAtualizacaoPredefinidaPopulacao: nome da variavel global', nome_variavel);
  console.log('covidUIAtualizacaoPredefinidaPopulacao: nome da variavel valor', window[nome_variavel]);

  jQuery('#populacao-sugestao-metadata').html(dados._metadata);
  jQuery('#populacao-total').val(dados.populacaoTotal);
  jQuery('#populacao-total-de-0-ate-10').val(dados.populacaoTotalDe0Ate10 || '');
  jQuery('#populacao-total-de-11-ate-20').val(dados.populacaoTotalDe11Ate20 || '');
  jQuery('#populacao-total-de-21-ate-30').val(dados.populacaoTotalDe21Ate30 || '');
  jQuery('#populacao-total-de-31-ate-40').val(dados.populacaoTotalDe31Ate40 || '');
  jQuery('#populacao-total-de-41-ate-50').val(dados.populacaoTotalDe41Ate50 || '');
  jQuery('#populacao-total-de-51-ate-60').val(dados.populacaoTotalDe51Ate60 || '');
  jQuery('#populacao-total-de-61-ate-70').val(dados.populacaoTotalDe61Ate70 || '');
  jQuery('#populacao-total-de-71-ate-80').val(dados.populacaoTotalDe71Ate80 || '');
  jQuery('#populacao-total-de-81-ate-120').val(dados.populacaoTotalDe81Ate120 || '');

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

  // TODO: deve ter um modo sucinto de salvar as variaives por sufixo.
  storage.set('populacaoTotalDe0Ate10', jQuery('#populacao-total-de-0-ate-10').val());
  storage.set('populacaoTotalDe11Ate20', jQuery('#populacao-total-de-11-ate-20').val());
  storage.set('populacaoTotalDe21Ate30', jQuery('#populacao-total-de-21-ate-30').val());
  storage.set('populacaoTotalDe31Ate40', jQuery('#populacao-total-de-31-ate-40').val());
  storage.set('populacaoTotalDe41Ate50', jQuery('#populacao-total-de-41-ate-50').val());
  storage.set('populacaoTotalDe51Ate60', jQuery('#populacao-total-de-51-ate-60').val());
  storage.set('populacaoTotalDe61Ate70', jQuery('#populacao-total-de-61-ate-70').val());
  storage.set('populacaoTotalDe71Ate80', jQuery('#populacao-total-de-71-ate-80').val());
  storage.set('populacaoTotalDe81Ate120', jQuery('#populacao-total-de-81-ate-120').val());
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

  jQuery('#populacao-total-de-0-ate-10').val(storage.get('populacaoTotalDe0Ate10'));
  jQuery('#populacao-total-de-11-ate-20').val(storage.get('populacaoTotalDe11Ate20'));
  jQuery('#populacao-total-de-21-ate-30').val(storage.get('populacaoTotalDe21Ate30'));
  jQuery('#populacao-total-de-31-ate-40').val(storage.get('populacaoTotalDe31Ate40'));
  jQuery('#populacao-total-de-41-ate-50').val(storage.get('populacaoTotalDe41Ate50'));
  jQuery('#populacao-total-de-51-ate-60').val(storage.get('populacaoTotalDe51Ate60'));
  jQuery('#populacao-total-de-61-ate-70').val(storage.get('populacaoTotalDe61Ate70'));
  jQuery('#populacao-total-de-71-ate-80').val(storage.get('populacaoTotalDe71Ate80'));
  jQuery('#populacao-total-de-81-ate-120').val(storage.get('populacaoTotalDe81Ate120'));
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
jQuery('#cenario-sugestao').on("change", covidUIAtualizacaoPredefinidaCenario);
jQuery('#populacao-sugestao').on("change", covidUIAtualizacaoPredefinidaPopulacao);
jQuery('#resetar').on("click", covidUIResetar);
jQuery('#formulario-simulacao').on("submit", function(e) {
  covidUIAtualizacao();
  e.preventDefault();
});
