# Cifra de César

## Prefácio

O aniversário da sua mãe está se aproximando e você está organizando uma festa
surpresa. Para manter a festa em segredo foi criado um grupo de Whatsapp com
amigxs e familiares. O problema é que as vezes sua mãe utiliza o seu celular
e pode ser que ela veja as suas mensagens. Como a festa é surpresa, você
decide criar uma aplicação que permita enviar mensagens criptografadas e depois
descriptografar. Então agora é a hora de aplicar os seus super poderes 😎

## Introdução

A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos
primeiros tipos de criptografias conhecidos na história. É um tipo de cifra por
substituição, em que uma letra no texto original é substituída por outra,
seguindo um número fixo para essa subtituição.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

O imperador Júlio César usou essa cifra para enviar ordens aos seus generais no
campo de batalha. Essa é uma das técnicas mais simples e mais usadas para
cifrar mensagens.

Por exemplo se usarmos o deslocamento de 3:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Atualmente todas as cifras de substituição alfabética simples, são descifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de
César muitas vezes pode fazer parte de um sistema mais complexo de
criptografia, como a cifra de Vigenère, e tem aplicação no sistema ROT13.

## Objetivos

O objetivo principal de aprendizagem deste projeto é que você tenha sua
primeira experiência construindo uma aplicação web, usando os seus
conhecimentos de **User Experience Design** e de **JavaScript**. Isso
inclui desenhar um produto pensando nos usuários, construir uma interface,
escutar eventos básicos do DOM, escrever a lógica que cifra e descifra
mensagens, realizar testes básicos que comprovem (e documentem) esta lógica,
e finalmente manipular o DOM para que ele mostre e imprima os resultados.

Esperamos que neste projeto você possa pensar no usuário, entendendo quem ele
é e suas necessidades. A ideia é que consiga entender o que o usuário
necessita para criar o produto e o ajudar a resolver suas necessidades da
melhor maneira possível.

Também é esperado que você possa se organizar, tendo em conta o tempo e os
recursos disponíveis. Essa é a primeira vez que avaliaremos suas soft skills,
mas deve considerar que são habilidades que provavelmente já deve ter
utilizado em diversas experiências em sua vida. O importante é que realize
o projeto de forma integral.

## Considerações gerais

A lógica do projeto deve estar implementada inteiramente em JavaScript(ES6).
Nesse projeto NÃO está permitido usar bibliotecas ou frameworks, só
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

Para começar este projeto você terá que fazer um _fork_ e _clonar_ este
repositório que contém o _boilerplate_.

O _boilerplate_ contém uma estrutura de arquivos como ponto de partida, assim
como toda a configuração de dependência:

```text
./
├── .gitignore
├── README.md
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── tests.js
│   └── style.css
```

## Parte obrigatória

### Definição do produto

No `README.md` descreva o seu processo de desenvolvimento utilizando os
diagramas de bloco e como definiu os usuários quando estava desenvolvendo
seu projeto.

### UI

A interface deve permitir ao usuário:

* eleger um `offset` indicando quantas posições de deslocamento de caracteres
  queremos que a cifra utilize
* inserir uma mensagem (letras maiúsculas e minúsculas) que queremos cifrar
* ver o resultado da mensagem cifrada
* inserir uma mensagem (letras maiúsculas e minúsculas) para ser decifrada
* ver o resultado da mensagem decifrada

### Scripts / Arquivos

* `src/index.html`: este é o ponto de entrada da sua aplicação. Este arquivo
  deve conter o _markup_ (HTML) e incluir o CSS e JavaScript necessário.
* `src/cipher.js`: aqui você deve implementar o objeto cipher, o qual deve
  estar _exportado_ no objeto global (`window`). Este objeto (`cipher`) deve
  conter dois métodos:
    - `cipher.encode(offset, string)`: `offset` é o número de posições que
    queremos mover para a direita no alfabeto e `string` a mensagem (texto)
    que quemos cifrar.
    - `cipher.decode(offset, string)`: `offset` é o número de posições que
    queremos mover para a esquerda no alfabeto e `string` é a mensagem (texto)
    que queremos decifrar.
* `src/tests.js`: este arquivo deve conter os testes que você irá implementar

## Hacker edition


### Parte Opcional: "Hacker edition"

A descrição geral deste projeto não menciona o que aconteceria com as outros
caracteres (como espaços, pontuação, acentos, etc.). Também não foi mencionado
o que aconteceria se o `offset` fosse negativo. Como parte do hacker edition te
convidamos a explorar este caso por conta própria.

O desafio anterior nos ajuda a observar sua capacidade de autoaprendizagem,
podemos agregar aos seu trabalho um elemento que te leva à um novo nível.

O mesmo em habilidades socioemocionais. Você pode realizar um planejamento
tendo em consideração a utilização de ferramentas de planejamento como um
calendário, trello, flip chart entre outros, criando um plano passo a passo de
como quer enfrentar o seu desafio ou problema. Realizando uma estimação
realista do tempo.

## Entrega

Para entregar o projeto, você deve subir seu código para o GitHub
(`add`/`commit`/`push`)..

## Avaliação

Aconselhamos você a revisar [a rúbrica](https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQy1waRpQ-16sn7VogiDTy-Fz5e7OSZSYUCiHC_bkLAKYewr4L8pWJ_BG210PeULe-TjLScNQQT_x/pubhtml#)
para ver a descrição detalhada de cada _habilidade_ e cada _nível_.

***

***


## Checklist

### Parte Obrigatória

* [ ] `README.md` com explicações e desenho do projeto
* [ok] Usar VanillaJS.
* [ok] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser
  cifrado.
* [ok] Mostrar o resultado da cifra corretamente.
* [ok] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser
  descifrado.
* [ok] Mostrar o resultado descifrado corretamente.
* [ok] Permitir escolher o `offset` (_deslocamento_) a ser usado na
  cifragem/descifragem.
* [ok] Implementa `cipher.encode`.
* [ok] Implementa `cipher.decode`.
* [ ] Criar testes unitários.

### Parte Opcional: "Hacker edition"

* [ ] Permite usar um `offset` (_deslocamento_) negativo
* [ ] Cifra/descifra _outros_ caracteres (espaços, pontuação, `ã`, `á`, ...)

#### Fluxograma
![Fluxograma](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.xml#R7Vpdb5swFP01PLYCzOdjm%2FRT2jQpk7rtZXLADV4BR8Zpkv762Y1JwKZLQkjWNnmIZF%2FDtX3u4fheiAF62eyGwnHyhcQoNWxzRHFsgL5h2xb%2FcUM8k13bAtIyX1g8x10YxD0D%2FILkhaa0TnCMipovRkjK8LhujEieo4jVbJBSMq1f9kjS%2BsLGcIQ0wyCCqW59wDFLFlan3IWw3yI8SuTMbiAHMlheKzdSJDAm04oJXBmgRwlhi1Y266FUYFciJ%2B8z7Os3LlgujaKcbXhP8nJ790Dv%2B1lv%2BOvs5vfT9%2Bh%2BcCYdPcN0Ind9lxs9YFz0I0wM20u598sh5a2RaOnTlg4QZWhWMxVsXiJJySSPkViHxZ1ME8zQYAwjMTrl3OG2hGWpHF4CxImFSIYYnYuAymCOliYxhySSIzcvFwAsf9GfrsJmlQAllZB5Kmi8IXHbAkNbw%2FBNmCqYoDy%2BECTlvZzkSMfANlFcI%2BimoFR27TZsurRRlEKGnxtm%2BEYwX%2FfKfUEmNELSWoHd8hTcfU8joeqLQTpCrMGXuc7Xa2yWm28fLqCFq48K9AcKJcGPFNLuaJ%2BQbDgp9kJ5DXugcz5oiH7QCeWdo6V8GJ67NeDtwG9Pes3bMoyd0z7YPGT%2FZjU%2FzcaiGUEar6c2JYxDTnLeDc2WVAd1qluhV6K2huxLUdmN7WHDIVkgioU%2BwExsOB8W49fNqcrBE5iURDDjEDccp0hkCygveCaRtYwGH2Kdi0kzwiHQEfY7AbjM%2BE56IvJLt0M9cTzVW1d6Yump40cRFDsI6yCVLD6MnFh6BvLJ9ARYCsBecEg10bOTr681DeiuotFhKhglT6hHUkJXevSI01QxwRSPBHkjPiHi9ksxEeZV54UcyHAci2kaH4RVJdX2MA3qUu%2BYemi8Bu5r9WW70LhaaAY4O0VFjYrtBw0HsL%2B%2FuPhaXJZFUYw%2BcFnkeN5G0t5NWWRtkWR%2FrjwGKOW7a7rn7fMY9YVOk7fO8hg9uz9JkoiB%2BiQF%2FkElqfRyOsUbzwur%2FoA44ICnuL1F6v%2B5ZM5WZc5p%2F%2FJH9eWZzt5ErgxQJWLXuG2JsO%2B3%2BZavAgMalGefL%2FT1Au1qhof16qrMi2K4M4zmfj6KKIeoUz4GBwJRT%2FWPRCQc5cG2S3FuIRLAWeerM4nwPpBEqBBbgX7%2B7ZPbernUIBDvWx7s8P9CeLSlkqrLu5VKIFjvrbMvp8eb94WaDO9S3tqHEnWgZzJbRixKYVHgqB40NMPsh1Qm0f4p2ue%2BK7v9WWWsPzdWZQ6f5RXhDZKv904JR32RuhMlHE%2BlhF4M8JDA6sbHwkvRsPTlCpUv1Q0r5I2F2w1px7ur%2Fy0tLl%2F9%2BQtc%2FQU%3D)