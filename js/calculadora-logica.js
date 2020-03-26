/**
* Arquivo com funções escritas em JavaScript com cálculos principais.
* Favor evitar refatorar as funcões de calculadora-logica.js de modo que fique
* mais difícil para não-especialistas em JavaScript (ex.: pesquisadores
*  academicos)
*
* @license Public Domain
*/

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
