/*Para aula de hoje: criar dentro da pasta gráficos, um arquivo chamado: common.js*/
/*Em seguida cole o código abaixo no arquivo criado*/
/*acrescentar no arquivo indez, logo apos o fechamento do footer a seguinte linha de comando:
<script type="module" src="graficos/common.js"></script>   */

/*Tudo que for comum, vamos colocar aqui*/
const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}
/*Exportar para que outros módulos possam utilizar*/
export {getCSS}