# SQL vs. MySQL(MongoDB)

[MySQL:] *relacional*
    
    - Structure Query Language
    
    - É uma forma de armazenar dados com uma sintáxe própria (mongoose ajuda a usar javascript ao invés de ter que misturar duas sintaxes)

    - É baseada em Models Schemas --> modelos de armazenamento de dados em que há uma rigidez quanto ao dado a ser armazenado (quais valores devem ser fornecidos e seu tipo)
        
        * Ou seja, um dado não pode ter infoemações a mais, se for ter, deve por Null ou 0 nos outros que não terão (null preferência)

    - Dados serão armazenados em forma de tabelas --> cada fileira é um dado

    [RELATIONAL DATA BASES] Se existirem tipos diferentes de dados quqeuremos armazenar no app, usuários e produtos, por exemplo, devemos criar tables e schemas diferentes e a relação entre eles seria outra table/schema, nesse caso, os pedidos que vão relacionar o user que pediu e o produto a ser pedido

        - One to one: quando duas tables se relacionam apenas uma com a outra (usuario e endereço, por exemplo)

        - One to Many: quando uma table se relaciona com multiplas tables (umm endereçõ pode pertencer a mais de uma pessoa)

        - Many to Many: quando as tables se relacionam com varias outras (exemplo visto)

[NoSQL_MongoDB:] *não relacional*

    - Ao invés de tables, temos Collections (coleções de dados) --> expressos em forma de tabela, mas com uma flexibilidade maior que o SQL
    
    - Temos Schemas, porém não há forte rigidez quanto à padronização para todos os dados, ou seja, alguns dados armazenados podem ter ou não certo tipo de informação (dado = objeto e info = atributo --> os objetos não precisam term os mesmo atributos preenchidos, apenas ou obrigatórios).

    - Não há relaçoes entre as collections, apenas se o usuário fizer manualmente, mas a DB não fará por você que nem no SQL

    - Não há conexão de tables/collec, mas você pega info de uma e trás para outra, exemplo: uma compra tem os dados do usuário e do produto --> a table compra não tem relação com as outras mas pega dados delas --> o ruim é que haveria cópias de dados, e se algo mudasse em uma table, ele não mudaria automatico na outra que nem na SQL!

[conclusão:] O SQL é mais sólido e rigido, porém se sabe como vai ser a estrutura do dado e mais facil de prever a structure e lidar com mudanças de dados. O MySQL é mais flexível e mais fluido, porém com mais riscos quanto à mudanças de dados em uma table e a outra que copiou dados dela não serão mudados automaticamente, além da estrutura de como o dado será armazenado é mais flexível

**horizontal Scalling e Vertical Scalling**

- *HS* seria você ter *varios servers* que possuem os dados da DB, que estarão distribuídos nesses vários server. Apenas possível na *MySQL*, pois como há mais flexibilidade, você pode armazenar os dados e collections diferentes espalhadas.

        * ou seja, armazenamos cada table/collection em um server diferente e usamos dados de um no outro.

- *VH* é basicamente *aumentar a capacidade de armazenamento de um server*, sendo a solução do *SQL* que é mais rígido, e portanto *não pode ter dados/tables espalhados em vários servers*

### Quando usar MySQL: se você updata muito os dados e tem muitas relações fortes entre as tables, SQL é mais interessante

### Quando usar NoSQL: se você quer tem muitas collections com relações fracas entre si e que não são constantemente atualizadas, o NoSQL é melhor