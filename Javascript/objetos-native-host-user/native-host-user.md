
# Objetos 

## Native

São objetos definidos na especificação da linguagem e são implementados independente do host

`Objtect, String, Array, Function`

## Host

São objetos implementados pelo próprio ambiente. O browser possui os objetos do DOM. Em Node.js os objetos do host são diferentes, pois não estamos em um ambiante do browser.


`NodeLista, HTMLCollection, Elemente`


## User

São objetos definidos pelo seu aplicativo. Qualquer objeto que você criar ou que importar de uma biblioteca externa.

```javascript
const Pessoa = {
	nome: ‘caio’,
```

## Algumas diferenças 

- Browser diferentes: Apesar de tentarem ao máximo manter um padrão, browsers diferentes possuem objetos com propriedades e métodos diferentes.

- Versões de browsers: Sempre que o browser é atualizado, novos objetos, métodos e propriedades podem ser implementados.

- Host e Native Objects: Por exemplo, browsers que não implementaram o ECMAScript 2015 (ES6), não possuem o método find de Array.


