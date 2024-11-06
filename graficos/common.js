/*Para aula de hoje: criar dentro da pasta gráficos, um arquivo chamado: common.js*/
/*Em seguida cole o código abaixo no arquivo criado*/
/*acrescentar no arquivo index, logo após o fechamento do footer a seguinte linha de comando:
<script type="module" src="graficos/common.js"></script>   */

/*Tudo que for comum, vamos colocar aqui*/
const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}
const tickConfig = {
    color: getCSS(--primary-color),
                size: 16
                family: getCSS('font')
}
/*Exportar para que outros módulos possam utilizar*/
export {getCSS, tickConfig}
