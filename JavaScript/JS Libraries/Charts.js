/// Charts.js guide

// 1) Primeiro deve-se criar um canvas no html e uma id para o canvas. Em seguida deve-se armazenálo em uma variável no script e dois instanciar o Objeto Charts
//Passa como parâmetro o canvas e as confidurações do chart em formato de objeto (Labels, datalabels{data, label...}, options, etc)
//adicionar os dados em forma de array, e se certificar que os dados do eixo x correspondem em índice com o eixo y!!

//2) para criar multiplos graficos no mesmo chart, basta adicionar mais um objeto no array 'dataset' e add 'data', 'label' e as cores e etc!!
//Eu posso usar config globais q se aplicam a todo o texto dos gráfico, exemplo: Chart.defaults.global.defaultFontColor = 'red'; --> posso fazer para estilo e tamanho da fonte tbm

//3) eu posso desabilitar a linha e mstar apenas os pontos adic a config nos datasets: showLine: false ou se quiser para todos datasets eu ponho em options

//4) OPÇÕES GLOBAIS: Chart.defaults.global... = value ;; Ex: Chart.defaults.global.datasets(coloca o tipo de coisa que quer mudar).line.showLine = false; --> traria as linha de TODOS os datasets
//Obs: eu posso setar globalmente mas se eu em um dos elementos tirar isso, ele tem precedência pelo global para o elemetno!!

//Tipos de opções: animations(ease, onComplete, onProgress), datasets, labels, fonte, layout --> opções que podem ser setadas em 'options'

//option.legend --> display (mostrar), position, align, label (fontColor/Size), onClick, onHover
//option.title --> display, fontsize, fontfaily e color, padding, text, position
//elementos: pontos --> pointStyle, borderColor, borderRatio, backgroungcolor, border width
//elementos: retan (bar), line, arc(pizza)..



