/**
* O arquivo calculadora-inicializacao.js foi criado para, caso necessário,
* conter conter qualquer rotina que seja necessária por calculadora-logica.js
* e calculadora-ui.js.
*
* Um ótimo exemplo seria pré-carregar dados de algum web service e/ou arquivo
* json externo com dados atualizados de pais. Também pode servir para permitir
* que uma pessoa editando apenas o HTML de uma pasta local sem inicializar um
* servidor http não tenha problemas com CORS, arquivos não carregados, etc.
*
* NOTA: este arquivo não precisa ser amigável. Pode ter gambiarra. É livre setar
*       variavel global aqui.
*
* @license PUBLIC DOMAIN
*/

console.log('calculadora-inicializacao.js carregado');


// @see https://github.com/julien-maurel/js-storage
var ns=Storages.initNamespaceStorage('ns_padrao');

// storage: variavel global
storage=Storages.localStorage
