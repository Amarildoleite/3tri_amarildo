/*Crie uma pasta chamada: graficos
Crie um arquivo dentro desta pasta chamada: informacoesGlobais.js*/

/*O endereço abaixo você encontra neste endereço, no link "dados
globais" https://github.com/guilhermeonrails/api?tab=readme-ov-file*/

/*const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

console.log(url);*/

const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

/*IMPORTANTE: NO INDEX LOGO ABAIXO DO FOOTER digite: 
script type="module" src="graficos/informacoesGlobais.js></script>*/

/*Esse comando requisitará os dados da url acima*/
async function visualizarInformacoesGlobais(){
    /*O comando abaixo aguarda a requisição feita acima*/
    const res = await fetch(url)
    /*O próximo comando pegará somente a parte da resposta do conteúdo da url*/ 
    const dados = await res.json
    console.log(dados);    
}
visualizarInformacoesGlobais()