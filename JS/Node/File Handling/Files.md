## Módulo FS

- O módulo [fs] já vem com o node (global) então basta por o nome no require para poder usar suas funções
- Ele pode ser usado de forma *síncrona* ou *assíncrona*

    ### Sincrona vs. Assíncrona

        Sincrono: ele ler o arquivo e impede que o código seja exectado enquanto até que termine de ler
        Assíncrono: ele executa o código enquanto executa a leitura do arquivo e depois fornece o que leu

        Usar de forma assíncrona é muito melhor para a performance da aplicação, pois não trava o código e o loop de eventos da aplicação 

# Lendo Arquivos e Pastas

## Arquivos
- Importa a biblioteca 'fs'

- Executa a função **readFile(nomeArquiv+Dir, encode('utf-8'), callback(erro, content))** --> forma async. readFileSync é a forma sync e não tem a callback, pois processos async executam uma callback por padrão!

- Na async a callback é necessária para reportar um erro, pois diferente da sync, o erro só vem depois q abrir o arquivo, porém terá código sendo executado

ObS: se eu quiser o diretório do arquivo em que estou fazendo o código, diretório atual, basta eu usar *__dirname* que está presente em todos os módulos 

## Pastas
- Importar o 'fs'

- O comando é *readdir*. Ele mostra o conteúdo de certa pasta em um array com os nome dos conteúdos

- **__dirname** fornece o diretório atual em que está o arquivo JS que vc está executando o código então se um arquivo q euro ler esta nele, eu posso apenas concatenar essa variável ao nome do arquivo com './'!!

## Arquivos json

basta usar o require e o path do arquivo, pois json é um arq de notação a obj então o require reconhece e já converte em obj!!

# Escrevendo em Arquivos

OBS: se o file não existir ele gera um!!

- Usa-se a funão **fs.writeFile(dirArqu, conteudo(convertido em json/string), callback(erro))** --> se tudo der certo ele envia null para a callback
- Lembrando que eu tenho que converter o que quero passar para o elemento legível para o tipo de arquivo

[ex:] CONVERTER OS DADOS PARA JSON POIS É A FORMA PRINCIPAL DE PASSAR DADOS. STRINGS TBM MAS JSON SÃO STRINGS MAIS COMPLEXAS EM NOTAÇÃO DE OBJETO ENTÃO É MAIS UTIL PQ É SÓ DA UM PARSE E PODERÁ USAR NO SCRIPT!

[OBS:] MESMO TENDO UM *ARRAY DE OBJETOS* SE EU DER UM *JSON.STRINGFY* ELE CONSEGUE converter todos os objetos do array E ME PERMITE MANDAR E USAR!!