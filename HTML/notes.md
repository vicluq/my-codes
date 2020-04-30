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


## Tipos de Links <a>

[1] Links para outras páginas so site/fora --> [href]; Se for link externo, usar o protocolo http

[2] Links Para telefone e email --> tel e mailto e fornecer o telefone e o email do site

[3] Ancoragem --> navegar para uma região espeífica da página. Ex: põe ID no header e cria um botao que navega pro topo href="id"


