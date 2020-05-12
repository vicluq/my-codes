# **Cascade Style Sheet 3**

## **Anatomia**

seletor {
    prorpieadades
}

- Algumas podem ser escritas já com vários elementos *short hand property*
- algumas podem ter várias opções para, caso a anterior não funcione, o browser chama outrA [FONTES]
- algumas propriedades tem funções -> width com a função calc --> calc(100% - 200px) pegue 100% da width e tire 200px

-[pseudoclases_':'] --> seletor:hover, seletor:active --> se referem a situações específicas, como o passar no mause, etc. Elas herdam as propriedades das clases principais, mas se eu alterar algo nela, sobrescreve (herança)

-[pseudo-elemento_'::'] --> seletor::first-letter, por ex
<hr>

## **Seletores**

>usados para **referenciar elementos HTML** para quais queremos **aplicar estilo**
>classe, id, att personalizado, descendentes, apenas filhos diretos, nth-child, nth-type-of

[obs_especificidade]:

- **style inline**(definidos via JS ou direto na tag) > **Id** > **tag.classe/attr** (caso haja vários tipos de tag com a mesma classe) **:hover**, **:active** > **classe/attr** > **tag**

- Se houver a mesma especificidade, ganha o último criado!
<hr>

## **Herança**

[-] Algumas propriedade, por padrão, são passadas como herança aos elementos filho. Mas quando  alteradas no elemento filho, elas serão alteradas apenas no elemento em questão. **MESMA IDEIA DA HERANÇA POR PROTÓTIPO**
<hr>

## **Box-Model**

[-] Os elementos são dispostos em modelos de caixas e [containers] que tem seu valor calculado de acordo com a [margem], o [padding], a [borda] e a [width] e [height]

<img src="https://3.bp.blogspot.com/-bazBCgIVlKk/UNCBsYAqxVI/AAAAAAAAAAU/2pTyIslk7pY/s1600/Untitled.png">

- **margem**: <br> espaçamento externo e transparente
- **padding**: <br> espaçamento interno e visível
- **content(height x width)**: <br> o tamanho em si do conteúdo
- **border**: <br> borda que rodeia o content + padding e tem uma expessura que conta no total


## **Margin-Collapse**

> Por padrão, as mergens dos elementos seguidos, ou Pai e primeiro/último filho, se sobrepõem não contando as duas margnes como diferentes, mas sim um só

**Formas de evitar**: display: inline, block; float; position absolute

<hr>

## **Display: como o elemento ao qual aplico será disposto na página**

> display da div != de aplicar display aos componetes da div

- [**block**]: cada elemento terá sua **própria** linha, ou seja, ficará um embaixo do outro. Então, quando eu aplico em um li, ou p, ou qualquer outro, ele terá sua própria linha e seu comportamento passará a ser exibido em sua linha (*padrão da div, ul/ol/dl*)

- [**inline**]: Os elementos aos quais apliquei, passam a compartilhar a linha com os outros que tbm tem o inline, e algumas de sua propriedades são ignoradas, como no **span** por exemplo, pois seu *display padrão é inline*!!

**No block, eu posso mexer na *width, height e margem top/bottom* dos elementos pois cada um tem sua linha, algo que não ocorre no inline, pois os elementos compartilham a linha**

> "Property is ignored due to the display. With 'display: inline', the width, height, margin-top, margin-bottom, and float properties have no effect"

<br>


- [**inline-block**]: vai manter o display do **inline**, porém vai *considerar as propriedade que o inline ignora (width, height, margin top/bottom)*

**obs**: quando você no html quebra a linha entre uma div e outra, ele conta essa pequena margem, podendo atrapalhar o display. Ex: a div que encobre as duas tem tamanho máx de 400px e cada div filha tem 200px. Mas como eu pulei uma linha entre as filhas, ficou uma *pequena margem de 5px devido ao caracter branco (espaço)*, totalizando 405px, sendo assim, a div mãe q tem tamanho máximo de 400px, não aguentará o display inline-block das filhas, deixando-as como se fosse um block.

<br>

**obs**: EU TENHO QUE APLICAR NO ELEMENTO O DISPLAY. EXEMPLO, SE EU APLICO O DISPLAY NA UL, A UL CMPARTILHA A LINHA COM OUTROS, MAS OS LI ENTRE SI, NÃO FICARAM COM O MESMO DIPLAY ENTRE ELES A NÃO SER QUE EU BOTE.

> O DISPLAY DO ELEMENTO FICA DE ACORDO COM O SEU 'ESCOPO', OU SEJA, SE EU COLOCO DISPLAY INLINE NO li ELES FICAM NA MESMA LINHA ENTRE SI, MAS NÃO COM OS OUTROS DO BODY, POIS QUEM NA VERDADE É IRMÃO DOS OUTROS ELEMENTOS É O ul. ENTÃO O ul QUE DEVE SER INLINE PARA COMPARTILHAR A LINHA COM OS OUTROS DO BODY!!
<br>
<hr>

## **Height e Width**

- **Dimensões relativas (%)**: uma porcentagem do elemento pai. width = 30% --> 30% da width do pai
- **Dimensão absoluta (px, cm)**: eu dou um tamanho para o elemento. E mesmo que o pai tenha altura menor, a altura do pai aumenta o tamanho que eu dei para o filho!!

**obs**: os pais, caso eu não fornceça uma dimensão fixa, vão aumentando de altura conforme o tamanhoXqntd de filhos!!

- **Body**: por padrão ocupa toda a dimensão horizontaç, mas a altura é definida pela quantidade de elementos e seus tamanhos, ou se eu setar uma altura. Se eu quiser pegar toda a tela, eu seto o HTML para 100% e o body tbm pois o body é filho do html. (isso ajuda na compatibilidade com cada dispositivo, pois ocupa 100% da tela disponível)

- Mantendo o **Body fixo e sem se mover pelas margens dos outros elementos** -> *position: fixed;*

- **Box-Sizing**: define o tamanho da caixa do elemento que pode tomar como relação o conteúdo ou da borda para dentro. POR PADRÃO é o content box, mas nesse caso, pode extrapolar o tamanho do display (barra de rolagem). O border-box, faz com que não haja essa extrapolação, pois o 100% não será do content, mas sim do conjunto de tudo!! Serve para qualquer tamanho;

> border-box = padding + content + border <br>
> content-box = content, sem contar com os outros

<hr>
<br>

## **Overflow e ScrollBars**

> overflow é quando um elemento extrapola o outro, exemplo, um texto enorme que passa a div.

- **overflow hidden** => esconde tudo o que passou
- **overflow-x/y scroll** => adiciona uma scrollbar ao eixo x/y

> Eu posso editar o scroll... div::pseudo-elem = -web-kit-scrollbar[-track/thumb]


<hr>
<br>

## **Cores**

[**HSL**]: (espectro 0-360, saturação%, tonagem%(mais escuro/claro))

[**RGBA**]: (red 0-255, green 0-255, blue 0-255, opacity)

[**HEX(#)**]: (red 0-255, green 0-255, blue 0-255, opacity)

<hr>
<br>

## **Textos**

### Text-Transform: 
- capitalize, lowercase, uppercase
### Text-decoration: 
- overline, underline, linha no meio
### word-spacing: 
- separação entre palavras
### letter-spacing: 
- separação entre letras
### line-height: 
- espaçamento entre linhas


<hr>
<br>

## **Position**

### **Static (padrão):**
- **não leva em consideração** as propriedades *left, rigth, top e bottom* (mover o elemento), pois fica parado naquele lugar
<br>

### **Fixed:**
- O elemento fica fixo naquela posição, mesmo descendo na página. Responde às propriedades, left/rigth, bottom/top, ficando **fixo mesmo se movendo na página**!
- aplicabilidade: pôr anúncios com um botãozinho para fechar o display a clicar, ou colocar um aviso, etc
<br>

### **Relative:**
- Ele leva em consideração as proprieades left/rigth, bottom/top, mas elas **são aplicadas em relação ao elemento acima**, exem: top 30px, 30px distante do elemento acima
<br>

### **Absolute:**
- Ele leva em consideração as proprieades left/rigth, bottom/top, mas ele não se preocupa com os elementos anteriores e ao seu redor, e fica numa **posição absoluta em relação à página, mesmo estando dentro de outros elementos**, *ignorando a posição dos elementos irmãos*!!

**OBS:** Se o *elemento pai tiver uma posição relativa*, o *filho com absolute se posiciona em relação à ele* e não à página
<br>

### **Sticky:**
- O elemento ficará **grudado na parte de cima/lados** (se for scroll horizontal) da página durante o scroll pela página à x pixels do top, mas ao subir para onde ele fica inicialmente, ele retorna à sua posição

<hr>
<br>

## MediaQuery

- Está relacionado à responsividade em vários dispositivos, tamanhos!

- Passo uma séries de critérios (max-width, orietation do device) para exibir um display específico -> **@media (critério1) ,/and (critério2) {.class/#id {display: x;}}**. Caso se encaixe em um dos critérios ou nos dois (operador 'and'), ele entra nesse mediaQuery e aplica o dsiplay ou propriedade específica!!

<hr>
<br>


## DropDown Menu

- Coloco a lista dropdown dentro do li da lista que quero que mostre ou dentro da div que envolve o elemento que será hoverado
- Seto a posição para absolute da dropdown para não interferir nos outros, e ajusto a altura que quero dentro e a posição horizontal
- Em seguida, no CSS boto para quando der um **hover no li/span** ele **exiba o conteúdo no display que quero**

<img src="C:\Users\Victo\OneDrive\Imagens\Code\DropDown.png"/>
<img src="C:\Users\Victo\OneDrive\Imagens\Code\DropDownHover.png"/>

<hr>
<br>