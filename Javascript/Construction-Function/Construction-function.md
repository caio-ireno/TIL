# Constructor Function

Para criar um objeto basta definir uma variável e iniciar a definição do seu valor com `{}`.

```javascript

const carro = {
marca: "Marca",
precp: 0,
}
```

Podemos criar um novo objeto baseado no objeto `carro` porem a estrutura muda.

```javascript
function Carro(){
this.marca='Marca';
this.preco=;
}

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 4000; 
```

`Carro()` é uma função construtura e não um objeto, como criado anteriormente. Dessa maneira, podemos criar objetos a partir dela. 

Vale lembrar que, por convenção é utilizado o Pascal Case em uma `função construtora`, ou seja, começar com letra maiúscula.

Podemos atribuir valores da seguinte forma também:

```javascript
function Carro(marca,preco){
this.marca=marca;
this.preco=preco;
}

const honda = new Carro('honda', 3000);
```

## new kwyword

A palavra `new` é responsável por criar um novo objeto baseado na função que passarmos a frente dela.

```javascript

const honda = new Carro();

// 1 Cria um novo objeto
honda = {};

// 2 Define o protótipo
honda.prototype = Carro.prototype;

// 3 Aponta a variável this para o objeto
this = honda;

// 4 Executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;

// 5 Retorna o novo objeto
return honda = {
marca: 'Marca',
preco: 0,
}

```
 ## this keyword

 O `this` faz referência ao próprio objeto construido com a `contructor function`

