# MongoDB com Mongoose

## Conceitos

> **Collections** --> conjunto de models 
> **Models** --> são uma table com dados, cada model tem seus dados armazenados que são fornecidos pelos users do app
> **Schema de um model** --> forma como o dado de um model é estruturado (atributos, tipos)

## Schemas e adicionando dados às collections(compostas por models) da DB (cada Model armazena um tipo de dado - livros, musicas, personagens, etc)

[1] Antes de tudo tem que *conectar o mongoose ao MongoDB por meio da porta em que ele está* conectado, definida na intalação do MDB com o Docker

[2] Criar o Model(um estilo de dado [livro, celular, etc]) e seus *schemas* (a forma como esse dado será estruturado e seus componentes) a partir do mongoose (new mongoose.Schema(objeto com os dados a serem pegos do elemento e seus tipos))

[3] Registrar o schema criado como pertencente ao Model com método 'model('nomeDoModel', schema_do_model)' do mongoose

[4] No server, fazer o require desse model criado após a conexão com o MongoDB e atribuir o model criado à uma variável(*mongoose.model('nome')*) para poder usá-la para inserir dados e pegar dados desse tipo de *model que terá seus dados estruturados de acordo com o schema*!

[5] Para criar um elemento a ser armazenado basta pegar a variável e usar o método 
create({obj cm os dados pedidos pelo model}). Isso tudo após ser feita alguma request pelo user, ou seja, nas configs das requests em certo path!

> Atribuir aos elementos do objeto do model o body da request post, put, delete por exemplo!

> schema é um método do mongoose que, ao ser instanciado, cria o schema/objeto que será a forma como o dado desse tipo de model/colection será armazenado

> **Adicionar/conferir algo na DB é um processo assíncrono, então devemos tratar com callbacks e promisses**

                                       Model 1 (livro) 
                DB ----> Collections / Model 2 (celulares)
                                     \ Model 3 (revistas)
                                       Model x (notebooks)


## Procurando dados de Models da DB --> especifico o Model que quero pegar do qual quero pegar os dados

> Utiliza-se o método assíncrono **model.find()** --> promessas ou async/await
> Onde aplico? Numa request do tipo dependendo do objetivo do user

[1] primeiro importa o Model para o arq e o armazena numa variável e apartir dela vamos 'operar' com o model (table de dados) da nossa DB

[2] usamos **nomeModel.find({}).then(lidar com promessa -> response)** para listar tudo o que temos nessa colection (model) 
            > nomeModel é a variável que recebe o modelo do método mongoose.model('modelX') --> modelX foi importado do arquivo onde foi criado esse modelo com seu schema

> Eu posso passar como parametro pro find um objeto com algum dos atributos do schema e ele procura para mim!

> DRIBLANDO O CASE SENSITIVE: boto a string do atributo tudo lower case e do param tbm e uso o método string.includes(str) para saber se o que o usuário digitou está contido naquela string

>**model.findById(id do mongoDB)**: ele pega a id fornecida no parâmetro da request e exibe o result. É mais limitado pois a id é um número enorme que o usuário tem pouco acesso.


## Atualizando Dados - 'PUT'

>**model.findByIdAndUpdate(req.params.id, body_Novo, {new:true})**: o new:true é para avisar que retornará um elemento atualizado.
    OBS: ele só atualiza o que receber de novo. Se você não fornecer algum atributo novo, ele mantém o antigo, então é bom usar no body, keys com o mesmo nome das do schema, pois se não ele adiciona as keys com nome diferente ao invés de atualizar!

## Removendo Dados - 'DELETE'

>**model.findByIdAndRemove(params.id)**: remove algo da sua DB


# Mongoose-paginate

> Quando se tem inúmeros registros, é importante para a peformance, separar por páginas, e o paginate faz isso

> Ao invés de usar o find() para todos, nós usariamos o paginate({vazio pois não tenho filtros, quero tudo}, {page, limit = x}). A page seria passada no **req.query (tudo o que vem depois da '?), pega elementos da req e filtra usando o '='**
// Page = req.query.page. O usuário passa a pág na query!

EX query: [empresas/1/funcionarios?ativos=true] --> req.query = {ativos: true} objeto com chave e valor desejado!
**topico mais avançado, se aprofundar mais depois**

**OBS**: EU POSSO POR DELETE E GET NO MESMO ENDEREÇO E NÃO ROLA NADA PQ A REQ DELETE TEM QUE SER FEITA ESPECÍFICANDO QUE QUER DELETAR, POIS QUANDO ACESSAMOS O ENDEREÇO DE ALGO, SEMPRE É GET.

> Eu teria que criar um botão com um input e ao clicar nele executa uma função que é responsável por fazer o fetch ou axios para deletar algo!