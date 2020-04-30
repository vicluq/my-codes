## Estrutura Básica de criação de server simples

- [1] Inicializa com **require('express')** e em seguida deve-se instancia uma aplicação(objeto) express pela função express, para poder usar os métodos
- [2] Abrir uma porta de conexão com o servidor por meio do comando **listen** e enviar o número da porta e uma callback que mostra algo no console todas vez q a conexão for estabelecida
- [3] Configurar que respostas serão dadas quando forem recebidas requests no servidor --> GET, POST, etc. E, também, configurar que paths ('/...') serão enviados os dados e recebidos, etc. o path da rota principal é '/'
- [4] Usar o cors para poder permitir entrada de elementos no server
- [5] Usar o body-parser para evitar problemas com dados JSON, pois ele da um parse automático!!

*OBS:* se eu usar use ao invés de get e não definir um path, ele considera para QUALUQER PATH que eu por ao tentar acessar o server, ou seja, qualquer path que eu acessar por umeio de uma request no browser, os dados vão ser exibidor

## Métodos importandes do Express

- **get(path, (req, res, next))** --> configura o que acontecer ao receber req GET em um certo path do server
- **post(path, (req, res, next))** --> configura o que acontecer ao receber req POST em um certo path do server
- **res.send({obj})** --> usado com a *res* para fornecer respostas em às requests e deve ser enviado um objeto que será automaticamente transformado em json!!
- **res.json({obj})** --> usado com a *res* para fornecer respostas em às requests e deve ser enviado um objeto que será enviado em json!!
- **res.status(num)** --> enviado em respostas do tipo POST para fornecer ao usuário se foi possível realizar a request post dependendo num que foi fornecido na res. Ex: 422 indica erro!


## Adicionando Parâmetros às GET para pegar algo específico

**app.get('/path/:id', (req, res, next))** --> Utiliza os dois pontos para indicar que há um param. Os param ficam armazenados num objeto da request chamado 'params' --> pegando o valor desse param: *res.params.id*


## Alterando dados já colocados --> 'PUT': o mesmo da 'POST', recebe um body e tudo -> post serve tbm

**app.put('/path/:id', (req, res, next))** --> você add no parâmetro o elemento já existente(cep, id, parametro qulauqer q identifique o eleme) *req.params.id* e troca alguma propriedade --> *req.body.x = novoValor*

*OBS: EU DEVO PASSAR O PARAMETRO DO ELEMENTO POIS ESSE PARAMETRO EU VOU PEGAR NO BACKEND E COMPARAR COM A DB SE EXISTE O ELEMNTO A SER ALTERADO, E SE EXISTIR EU APENAS REATRIBUO A ESSE ELEMENTO O NOVO VALOR DADO NO BODY!*

**Opção 2:** Se forem *dados que não devem ser mostrados na url*, eu *não passo parametro*, e *pego algo do body como referencia* para saber o dado a ser atualizado da request mesmo. EX: quero mudar a senha. Para saber qual usuário e senha antiga que devo procura na DB, eu peço no body da request isso, e não nos parametros para não ter que exibir na urls


## Deletando dados --> 'DELETE'

*Usando params como ref* --> basta por o path e o param q será referencia a ser procurada na DB
*Usando algo do body (conteudos sensíveis)* --> ponho o path apenas e pego a info do body para comparar na db usando uma função e ver se tem o que quero deletar

### Mesmo eu fazendo requests em paths diferents, um path para add, outro path para checar e com os params, se sabe que são os mesmo dados pois eu forneço pela base de dados então:

                                    path add: recebe as posts, pega os dados e armazena na base de dados
                                        ||
                                        ||        OBS: eu poderia fazer tudo no mesmo path, mas para organizar preferi setar paths !=
                                        \/
                                    path check: exibe o que está na base de dados com os dados coletados pelas requests do path add
                                         \
                                          \
                                           \> /check:param: vai checar algo especificado pelo param. Pego o param fornecido pelo user no front, e no back envio para uma função que vai ver se há algo na DB e se houver exibe o dado nesse path

