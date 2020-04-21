## Axios

**Para que serve**: realiza requests http de API's e dados

**Como Usar**:

    - Primeiro deve importar o módulo usando o require e acessar a função que faz o tipo desejado de request --> axios.get(...) que faz requests do tipo GET!!
    - Depois deve tratar a promessa/resposta que a request usando o 'then(callback)'. Ele receberá a resposta e enviará de parâmetro para a callback e é ai que obtemos os dados que queremos
    - Em seguida, devemos tratar caso haja erro na request usando o catch(callback) logo após o then, pois se não entrar no then significa que não houve uma resposta, e sim, um erro. O erro será parametro da callback onde deverá ser administrado

## Formas de usar o Axios

**axios.get(url,{config})**: Nessas config é onde botamos o token da API por exemplo (depende da documentação tbm da API)

**axios.get({dados da req})**: no caso botamos a url, o método e o token da API (header) por exemplo

*axios.request(config)*: nesse caso eu devo por TUDO --> url, metodo, token e tudo o que pedir