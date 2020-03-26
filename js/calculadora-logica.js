/**
* Arquivo com funções escritas em JavaScript com cálculos principais.
*
* JAVASCRITP BÁSICO: https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico
* VIDEO:             [[TODO: adicionar algum vídeo de ajuda sobre JavaScript aqui]] (fititnt, 2020-03-26 17:11 BRT)
*
*
* @license PUBLIC DOMAIN
*/

console.log('calculadora-logica.js carregado');

/**
 * Simulação mais simplificada possível de, para uma data população total e
 * a chance da respectiva população ser infectada (por exemplo, simulando uma
 * hipotética data final) e a chance de letalidade para respectiva população
 * retorna quantos óbitos ocorreriam.
 *
 * @param {Integer} populacaoTotal               - Total de população na região
 * @param {Float}   populacaoInfectadaPercentual - Percentual simulado que seria infectado
 * @param {Float}   letalidadeInfeccao           - Chance infectados virem a óbito
 */
function covidLetalidadeSimplificada(populacaoTotal, populacaoInfectadaPercentual, letalidadeInfeccao) {
  var populacaoInfectada = populacaoTotal * populacaoInfectadaPercentual / 100;
  var populacaoObito = populacaoInfectada * letalidadeInfeccao / 100;
  return populacaoObito;
}
