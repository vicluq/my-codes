# **JavaScript Anotações**

Alterando atributos de objetos constantes:
	Eu posso alterar seus atributos, porém não posso atribuir um novo objeto a esse objeto, pois senão ele deixaria de ser esse objeto
	Eu posso usar o método Object.freeze() para poder impedir a alteração e adição dos atributos --> útil por questões de segurnça


## console functions

- Além da log (que mostra o dado de forma simples), tem-se vários outros:

- **Console.table** --> (mostra os dados em forma de tabela)
- **Console.time()** --> console.endtime()

## Trabalhando com tempo

- **setInterval(callback, Xms)** -> executa *a cada X ms*
- **setTimeout(callback, ms)** -> executa *após X ms*
- **setInterval(callback, 0)** -> executa *assim que inciar* (util para web DOM)

## Client Side vs. Server Side

- Aplicações *server side, o HTML é gerado do servidor*
- No *Client Side ela é gerada no browser* e consome dados do servidor!!

> Conteúdo estático: quando é algo simplesmente renderizado na hora de carregar, o título, imagens do html, etc. <br>
> Conteúdo Dinâmico: gerado a partir de um código que manda para o HTML durante a execução no browser, uma pesquisa, etc.

- As vezes uma página estático é mais interessante, pois ao invés de estar consultando o banco de dados o tempo todo para gerar o dinâmismo, consulta com um certo delay para melhorar a performance

## HTTPS

- Protocolo HTTP + um protocolo de encrypt SSL/TLS(SSLv4). Tem que ter um certificado que instale o https no servidor (let's encrypt)