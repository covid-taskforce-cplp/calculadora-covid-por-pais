/**
* TODO: refatorar esse arquivo, calculadora-dados.js, de forma mais dinamica.
*       neste momento ele está criando variaveis globais
*
* @license PUBLIC DOMAIN
*/

console.log('calculadora-dados.js inicializado');

dados_populacao_customizado = {
  _metadata: "Customizado"
}
dados_populacao_brasil = {
  populacaoTotal: 209300000,
  _metadata: "209,3 milhões (2017), As fontes incluem: Banco Mundial, Departamento do Censo dos Estados Unidos"
}

dados_populacao_brasil_rs = {
  populacaoTotal: 11329605,
  _metadata: "11 329 605 hab. (2018) estimada. https://pt.wikipedia.org/wiki/Rio_Grande_do_Sul"
}

dados_cenario_customizado = {
  _metadata: "Customizado"
}
dados_cenario_alemanha = {
  populacaoInfectadaPercentual: "",
  letalidadeInfeccao: 0.56,
  _metadata: "(rascunho) Alemanha em 2020-03-26. https://g1.globo.com/bemestar/coronavirus/noticia/2020/03/26/com-500-mil-testes-por-semana-alemanha-tem-uma-das-menores-taxas-de-letalidade-por-covid-19-na-europa.ghtml"
}

dados_cenario_10p_infeccao_01letalidade = {
  populacaoInfectadaPercentual: "10",
  letalidadeInfeccao: 0.1,
  _metadata: "10% de infecção, 0,1% de letalidade"
}
dados_cenario_10p_infeccao_05letalidade = {
  populacaoInfectadaPercentual: "10",
  letalidadeInfeccao: 0.5,
  _metadata: "10% de infecção, 0,5% de letalidade"
}
dados_cenario_50p_infeccao_01letalidade = {
  populacaoInfectadaPercentual: "50",
  letalidadeInfeccao: 0.1,
  _metadata: "50% de infecção, 0,1% de letalidade"
}
dados_cenario_50p_infeccao_05letalidade = {
  populacaoInfectadaPercentual: "50",
  letalidadeInfeccao: 0.5,
  _metadata: "50% de infecção, 0,5% de letalidade"
}
