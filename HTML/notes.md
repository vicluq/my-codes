## Anatonima da Tag

- Tudo o que estiver dentro da tag "<tag> corpo da tag </tag>" é o corpo da tag

- Algumas tags não precisam ter corpo e algumas ainda não tem a '/' como fechamento -> <input  xxxxx />, <meta xxxxxx> , <img XXXXX />, <link params />

- Uma tag em geral tem várias tags dentro delas... childTags. É até o padrão mais usado para criar uma responsividade melhor da relação entra os companentes

- [prametros]: vão dentro do <> ao lado do nome da tag --> classe, id, type(tipo do elemento), etc.

- O HTML5 me permite criar meus próprios parâmetros para definir meus padrões e posso fazer coisas com isso no script! (no React isso será MUITO comum!) --> [COMPONENTES]

        >Isso vai servir para personalizar o de forma mais fácil e interessante a aplicação

- Se atentar ao significados das tags. Usar cada tag com seu devido propósito. O h1 é o título main, não pra ficar em qualuqer texto do body!

## Anatomia da Página e Tags

[doctype]: dizendo que está usando o HTML5!!
[html]: onde fica tudo, para indicar que é html

[head]: *elementos não visuais na pag*, import de links, meta, style (css), e o titulo da aba do navegador.

[body]: tudo o que é visual fica ai. Header, nav, divs, sections, elementos que serão parte da página

OBS: páginas com semântica correta, ajudam na maior exibição dela nos mecanismos de pesquisa! 

[header]: cabeçalho da página
[nav]: é a parte onde vai haver navegação pelo site

[meta]: ela dá cnfigurações sobre a página

[a]: links para outros locai/páginas do site

[aside]: pões elementos na lateral (propagandas etc)

[span]: *tag não visual e não semântica, apenas agrupadora* é usada para pegar elementos no meio de textos para aplicar serto estilo apenas para aquela parte específica ou até algo específico que quero pegar com JavaScript!!


## Transição de páginas com AJAX

- Ao clicar em um link ele envia para outra página, mas se eu quiser que ao inveés disso, ele renderize o conteúdo dessa página em uma seção do índex, eu posso usando eventos onclick;

        [1] eu devo previnir que ele haja de acordo com o padrão que é abrir uma página e esquecer da anterior
                Uso o 'event.preventDefault()' ao clicar (elem.onclick = function) 

        [2] Ao previnir a ação padrão, eu posso criar minha própria ação! Dou um fetch na href do link!!

        [3] Acessando e add atributos ao elem --> (elem.href) e para add usa a not ponto mesmo, (elem.onclick = blablabla)!! Ou usa a getatrbute ou setAttribute!!

        [4] Ao fazer a requisição da página href, eu pego o conteudo html usando a função text(). Assim como se fosse json eu usaria a json()

[obs] eu posso fazer isso, pois ao trazer esses elementos para o script, eles serão "convertidos" para objetos e seus param, serão atributos!!

## Texto Puro vs. HTML

[puro]: texto qualuqer sem usar tags --> innerText
[html]: usado com as tags/elementos html --> innerHTML

> Se eu por tags em strings (textos) que quero passar usando o innerHTML o browser renderiza o HTMLs


## Tags Texto

[cabeçalhos]: h1 > h2 > h3 > h4 > h5 > h6
        não tem haver com tamanho, mas sim com o significado da tag, grau de importância!

[Parágrafo]: <p></p> -> tabulação e quebras de linha são feitos com tag (br por exemplo!)
                itálico: <i></i>
                negrito: <b></b>
                sobrescrito (2 elevado a 2): <sup></sup>
                subscrito (h2o): <sub></sub>

## Elementos Irmãos e pais

[pais]: são os principais que englobam o conjunto de elementos que serão seus filhos (parent)
[filhos]: são aqueles que possuem um dono, pai (children)
[irmãos]: são aqueles que possuem o mesmo dono (nextElementSibling)

[OBS] *ElementChild* e *Child* são **DIFERENTES** --> element se refere à HTML tags

## Criando elementos DIRETO com uma id ou classe

> "tag(# ou .)nomeDoAtt"


## Tipos de Links "tag a"

[1] Links para outras páginas so site/fora --> [href]; Se for link externo, usar o protocolo http

[2] Links Para telefone e email --> tel e mailto e fornecer o telefone e o email do site

[3] Ancoragem --> navegar para uma região espeífica da página. Ex: põe ID no header e cria um botao que navega pro topo href="id"


## GUIA DE TABELA </table>

[caption] --> título da tabela
[head] --> onde fica o cabeçalho com os *tipos de dados* (EH MAIS POR SEMANTICA POIS FUNCIONA SEM, BASTA ESPECIFICAR O QUE É HEAD E BODY)
[body] --> onde serão *inseridos os dados* na ordem em que foi proposto do cabeçalho (EH MAIS POR SEMANTICA POIS FUNCIONA SEM, BASTA ESPECIFICAR O QUE É HEAD E BODY)
[tags]
        - thead: define o cabeçalho (table head)
        - th: define os headers (tipos de dados)
        - tr: usada para criar linhas horizontais (table row)
        - tbody: define o body onde ficarão os dados (table body)
        - td: tag que ficam os dados assim como os headers tem uma tag específica (table data)

[obs]: cada conjunto de dados fica dentro de uma linha --> <tr><td>1</td>...</tr>

> colspan: **Quantas colunas a célula ocupa em espaço**
> rowspan: **Quantas filas a célula ocupa em espaço**



## Guia Formulários

- NÃO USA O FETCH PRA FAZER ISSO, OS FORMS TEM AS ACTIONS E FORMACTIONS QUE TEM UM SUPORTE INCRÍVEL!

- Cria-se usando a tag form. *action* é um atributo que aponta para algum endereço server e *method* é o tipo de req para o action (server)
        - As actions (nos botões bota formaction para especificar que eh de formulário) podem ir no botão caso eu queria que cada botão tenha uma função reusando esse form. Um para alterar e outro para incluir

- Os dados do form serão enviados em formato [JSON] quer terá atributos com os nomes dos inputs e values com o que foi posto nos inputs/textareas

- Cada campo do formulário é um [input] de um *tipo específico*. Deve **mencionar o tipo do input**, pois além da *questão semântica tem a integração com o browser e os recursos*. Ex: se você informa que é do tipo password ele esconde com as bolinhas. Se você diz que é do tipo email ou telefone ele faz o preenchimento automático

- [input_hidden] aquele que eu não quero exibir. para dar uma id específica via JavaScript!!

- [name]: propriedade do input que será o nome do atributo que receberá o valor do input ao enviar o form pro backend **FUNDAMENTAL**

- *tipos de input*: password, email, text, radio (bolinhas para selecionar), tel, checkbox, etc.

- *tag **select** dentro de forms*: se junto a um form, ele envia as options selecionadas como um atributo(definido pelo name do select).
       > O Select pode ser 'multiple' (escolher várias coisas) e posso exibir várias coisas usando o 'size', e escolho quantos elementos quero exibir (envia um array para o nome do atributo do select com as options selecionadas)

* [OBS_INPUT_RADIO]: Se você quer que selecione apenas um, o 'nome' deve ser o mesmo, pois ao passra o obj do form, o atributo que recebe o mesmo nome do 'nome' pegará apenas um. Deve por também um [value] pois isso será o que será enviado ao back end1!


## Guia Imagens

[parametros_da_tag]

        >[title]: fornece um título para a image que é visivel ao passar o mause por cima
        >[alt]: exibe essa mensagem alternativa caso não ache a imagem
        >[align]: alinha a imagem na região e é muito importando usar quando tuver escrevendo textos (imgs dentro de parágrafos)
        >[width e height]

[tag_picture]: alternativa para adicionar imagens condicionalmente, ou seja, de acordo com o tamanho da tela, por exemplo!

        >[source] é de onde vem a imagem
        >[media="params css"] é meio que seta as condições também para mostrar a iamgem
        >Embaixo disso eu ponho a imagem back-up para a condição;
        [OBS]: eu posso encadear várias condições. 


## Guia Videos e Audio:

[tag_video_ou_audio]:
        >[source] --> de onde vem e o tipo --> mp4, mov etc! bota várias opções uma embaixo da outra, pois se uma não funfa a outra vai!
        >[controls]: porpriedade da tag video. quando chamada, EXIBE OS CONTROLES DO VÍDEO!
                >controlslist --> ajusta os controles que queremos ounão exibir!
        >[autoplay]: porpriedade da tag video. quando chamada, INICIA O VIDEO AUTOMATICAMENTE!
        >[oncontextmenu]: mostrar ou não o menu de contexto (quando clica com o botão direito) -> 'return false' para não mostrar e não deixar o usuário fazer download!!


# iframe -> exibe conteúdos ou outras páginas web

<iframe src="https://www.w3schools.com" height= 500px width=800px>
  <p>Your browser does not support iframes.</p>  <!-- caso não carregue -->
</iframe>

## Tags não visuais:

[div]: agrupar vários elementos html que tem alguma relação entre si para fazer um popup, um widget de video por exemplo. DISPLAY-BLOCK por padrão. <br>
[span]: display-inline, agrupa eleentos detro de uma linha (parágrafos) para aplicar um estilo específico para aquela área, etc. vários spans pertos não quebram linha um do outro(display inline), AO CONTRÁRIO DA DIV<br>
[section]: quando você quer definir um eixo temático em alguma região. Mais usadas para texto<br>
[article]: conteudo completo, com tudo já ali, não fica dentro de trechos, mas sim, é o trecho<br>
[Header]: cabeçalho principal<br>
[footer]: rodapé com infos <br>
[aside]: elementos de propaganda, exibição de algo<br>
[nav]: navegação por links<br>
[details]: exibir algum detalhe/elemento ou até esocnder<br>
