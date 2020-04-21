## Usando npm e package.json

- O package.json é um arquivo que todos projetos e apps devem possuir. Serve para informar e descrever o projeto(autor, nome, módulos usados, etc)
    Para criar um usa-se: 'npm init' (npm inicializar projeto é o que significa) --> se eu por 'npm init -y' significa que ele dira yes para todas as opções

- Uma parte importante do package.json é [dependencies] que diz o que foi usado (libraries/módulos/frameworks)
    
    [1] posso add manualmente ou automáticamente quando instalar a dependencia basta por: **'npm i --save "nomeMódulo"'** (OBS: EU DEVO ESTAR NA PASTA DO MEU PROJETO PARA SALVAR NO PACKAGE DELE, CUIDADO)
    
    [2] *versões das dependencias*: o '^' indica que ele só atualiza o módulo x em versões novas do minor updates (major.minor.fixes). O '~' só permite que o npm atualize os fixes. Isso e importante pois atualizações grandes podem mudar recursos existentes e bugar seu projeto!! Se não tiver flag, ele não muda nenhuma versão
    
    [3] *PACKAGE-LOCK.JSON* -> descreve mais detalhadamente as dependências instaladas. Ele atualiza sozinho quando adiciona uma nova dependência ao projeto (TEM QUE ESTAR NA PASTA DO PROJETOOOOO). Além disso, ele 'lock' a versão da depend mesmo se eu usar flag pr atualizar até pra ficar mais seguro

    [4] Se eu adicionar as dependências e suas versões, mas não tiver elas instaladas no meu projeto, eu posso instalar pelo npm SE ELAS ESTIVEREM LISTADAS NO PACKAGE DO PROJETO. EU DEVO ESTAR NA PASTA DO PROJETO ÓBVIO. **npm i**
    *isso é possível de fazer pois, se eu não forneço o que quero instalar, mas na minha pasta tem um package.json, o npm olha lá o que precisa!!*

    OBS: quando for mandar o projeto para algum lugar tem que instalar os pacotes/módulos usados neles e o package-lock.json te da com exatidão a versão usada então você especifica a versão assim: 'npm i --save pack@versão -E' o E significa exatidão

- *SEÇÃO SCRIPT*: Um objeto que contém atributos em que o nome do atributo é o comando e o valor dele é o arquivo a ser executado
        serve para executar os aruivos da pasta do projeto (SE CERTIFICAR QUE ESTÁ NA PASTA DO PORJETO ONDE ESTÁ O PACKAGE.JSON) DE FORMA RÁPIDA
        **npm 'atribComando'**. Posso por também o nome de algum módulo executável pelo terminal que eu queira usar (nodemon, por ex) e ao lado o nome do arquivo que vai ser executado usando esse módulo. Posso NÃO por o nome do arq que quero e ele vai automáticamente atrás do arquivo princiapl setado no package.json

- 

