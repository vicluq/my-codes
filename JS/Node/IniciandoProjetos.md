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

        - OBS: se o comando que eu usei não for um comando padrão como 'start', 'test', eu devo por a palavra [run] antes do nome do comando


# FrameWorks --> Estrutura para a aplicação (React, express, angular)

    ## FrameWorks Back-end (express, por ex)

    - Vão ajudar com a criação de servidores e bancos de dados (express, MongoDB)

    ## FrameWorks Front-end (react, por ex)

    - Ajudar no design e contato com o cliente


# Padrão Middleware --> chain of responsability

 - Uma sequencia de passos em que um passo chama o outro numa sequência. Não deve depender um passo doutro, mas eles são combinados para realizar algo (quem chama o outro passo é uma função).

 - O importante eh eles serem passos independ, pois poderia ser reusado em outro contexto!

 - PADRÃO DA WEB: request --> response --> next 

 - COMO FAZER: criar as funções que são os passos (middlewares) e essas funções vão fazer algo em sequencia em determinado objetivo. Em seguida, criar a função que vai executar o objetivo, ativando os passos

        Passa as middlewares (funções passos) como um array (usa o '...') e manda executar essas funções numa ordem usando o índex e funções recursivas, assim, ele vai abrir vários casos e vai resolvendo um passo por vez!! **ESTUDAR ESSE PADRÃO**


