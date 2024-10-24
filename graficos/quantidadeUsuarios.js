/*A aula de hoje usará os dados do site abaixo para gerar um gráfico:
https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json*/

/*criar um arquivo dentro da pasta graficos com o nome quantidadeUsuarios.js*/

/*IMPORTANTE colar o seguinte código no index, logo após o footer
<script type="module" src="graficos/quantidadeUsuarios.js"></script>
 */

/*IMPORTANTE: cole o seguinte link na útilma linha antes de fechar o head no index.html (com esse link buscamos um modelo de gráfico para o projeto)
<script src="https://cdn.plot.ly/plotly-2.27.0.min.js" charset="utf-8"></script>*/

/*Cole o conteúdo desse artigo no arquivo criado*/
async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json*/'
    /*Contante para aguardar a resposta, será feita a requisição dos dados da url acima*/
    const res = await fetch(url) 
    /*onde pegar a resposta e o conteúdo*/
    const = await res.jason()
    /*separar as chaves (por exemplo facebook) dos valores (quantidade usuários) correspondentes*/
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
    /*gerando os gráficos*/
    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeUsuarios, 
            type: 'bar'
        }
    ]
    /*colocar o gráfico dentro de uma div*/
    const grafico = document.creatElement('div')
    /*classe css*/
    grafico.className = 'grafico'
    /*Para acessar o código lá do html (o comando appendiChild, serve para inserir o gráfico*/
    document.getElementById('graficos-container').appendChild(grafico)
    /*criar um novo gráfico (com o comando data ele gerará o gráfico com os dados que queremos*/
    Plotly.newPlot(grafico, data)
}
/*Chamar a função*/
quantidadeUsuarios()