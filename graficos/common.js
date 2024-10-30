/*Tudo que for comum, vamos colocar aqui

const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}
    */
/*Exportar para que outros módulos possam utilizar
export {getCSS}*/

const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

export {getCSS}