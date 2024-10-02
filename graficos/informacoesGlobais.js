
/*Crie uma pasta chamada: graficos
Crie um arquivo dentro desta pasta chamada: informacoesGlobais.js*/

/*O endereço abaixo você encontra neste endereço, no link "dados
globais" https://github.com/guilhermeonrails/api?tab=readme-ov-file*/

/*const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

console.log(url);*/

const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

/*IMPORTANTE: NO INDEX LOGO ABAIXO DO FOOTER digite: 
script type="module" src="graficos/informacoesGlobais.js></script>
*/

/*Esse comando requisitará os dados da url acima*/
async function vizualizarInformacoesGlobais() {
    /*O comando abaixo aguarda a requisição feita acima*/
    const res = await fetch(url)    
    /*O próximo comando pegará somente a parte da resposta do conteúdo da url*/     
    const dados = await res.json()
    /*Para transformar o número em uma maneira mais fácil de ler*/
    const pessoasConectadas = (dados.total_pessoas_conectadas/1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo/1e9)    
    /*Teremos duas estruturas, uma relacionada só a gráfico e outra relacionada a textos*/
    const paragrafo = document.createElement('p')
    /*IMPORTANTE ESTILIZAR A CLASSE ABAIXO NO CSS*/
    paragrafo.classList.add('graficos-conteiner__texto')
    /*Criar o texto, o símbolo $ serve para colocar entre os textos uma informação. É um tipo de comando dentro do texto*/    
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoas_mundo}bilhões</span> de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas}</span> estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span> horas conectadas.`
   

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)    
}
visualizarInformacoesGlobais()