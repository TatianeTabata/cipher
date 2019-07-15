# Cifra de César

## Prefácio

A Cifra de Cesar foi desenvolvida para que fosse possível criptografar e descriptografar mensagens com uma lógica simples.
O aplicativo ofi criado com base nessa cifra e você pode testar o app [aqui](https://tatianetabata.github.io/cipher/)

Essa é a carinha do app :)  
![layout](img/cipher.PNG)

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

* [ok] `README.md` com explicações e desenho do projeto
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
![Fluxograma](https://github.com/TatianeTabata/cipher/blob/master/Untitled%20Diagram.png)