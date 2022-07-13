  <h1 align="center"> API's, REST e HTTP </h1>

* [API's](#API'S)

* [Padrão REST](#REST)

* [Protocolo HTTP/HTTPS](#HTTP/HTTPS)

* [URL E Método](#URL_E_Método)

  * [GET](#GET)

  * [POST](#POST)

  * [PUT](#PUT)

  * [HEAD](#HEAD)

  * [HEADERS](#HEADERS)

    

  <h2 align="center">API’S</h2>

**API’s** =  **A**pplication **P**rogramming **I**nterface

<b>Application:</b> Um servidor, aplicativo, objeto Javascript (String, number...) ou qualquer coisa que o usuário interaja através de comandos. Ao acessar um URL, estamos utilizando a API do browser para se comunicar com o a API do servidor.

<b>Programming:</b> Programação, isso significa que um comando irá encadear uma cadeia de eventos pré-definidos. O resultado esperado é geralmente o mesmo.

<b>Interface:</b> São os comandos criados para permitir a integração com a aplicação. 

Ex: `‘MeuNome’.toLowerCase()` é um método que faz parte da interface do objeto String. A interação com a interface retorna um efeito/resposta.

<b>Basicamente, API’s são uma coleção de métodos disponibilizados por um serviço para interação indireta.</b>

Exemplos de API’s:



> https://api.github.com/users/caio-ireno

Vale ressaltar que, `API`, não é o retorno da página (arquivo `JSON`). O arquivo `JSON `é a resposta que a `API` trouxe. Estamos interagindo com a `API`, através da `url`. 

> https://www.metaweather.com/api/location/455825/
>
> Tempo do rio de janeiro. Podemos utilizar esses dados com `fetch` para mostrar, em tempo real, como estão os próximos dias



<h2 align="center">REST</h2> 

**REST** = **Re**presentational **S**tates **T**ransfer

O rest é uma arquitetura que define um padrão de linguagem, boas práticas com regras para comunicação entre API’s e sistemas. É um protocolo cliente/servidor sem estado: cada mensagem HTTP contém toda a informação necessária para compreender o pedido.

**Vantagens da padronização:**

- Maior compreensão

- Redução de esforços

- Ganho em agilidade e eficiência

- Migração de sistemas

<h2 align="center">HTTP/HTTPS</h2> 

 **HTTP** =  **H**yper **T**ext **T**ransfer **P**rotocol.

Principal protocolo para **receber/enviar** arquivos e dados na web.

Utiliza a arquitetura do tipo cliente-servidor, ou seja, os clientes solicitam um determinado serviço, através do envio de uma mensagem ao servidor e ele executa a tarefa solicitada e enviam uma resposta ao cliente que se traduz nos dados solicitados.

É um protocolo **stateless** (sem estado), ou seja, o servidor não armazena o estado do cliente. É um protocolo de comunicação que considera cada requisição como uma transação independente que não está relacionada a qualquer requisição anterior.

**HTTPS** é uma implementação do protocolo HTTP sobre uma camada adicional de segurança que utiliza o protocolo SSL/TLS.



<h2 align="center">URL_E_Método</h2> 

Uma requisição **HTTP** é feita através de uma **URL**. O **método** padrão é o `GET`, mas existem outros como POST, UPDATE, DELETE, HEADER.

<h4>GET</h4>

GET irá puxar as informações da URL. Não é necessário informar que o método é GET, pois este é o padrão.

```javascript
const url = 'https://jsonplaceholder.typicode.com/posts/';
fetch(url, {
  method: 'GET'
})
.then(r => r.json())
.then(r => console.log(r))

```



<h4>POST</h4>

POST irá criar uma nova postagem, utilizando o tipo de conteúdo especificado no headers e utilizando o conteúdo do body.

```javascript
const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"titulo": "JavaScript"}'
})
.then(r => r.json())
.then(r => console.log(r))

```

<h4>PUT</h4>

PUT irá atualizar o conteúdo do URL com o que for informado no conteúdo do body.

```javascript
const url = 'https://jsonplaceholder.typicode.com/posts/1/';

fetch(url, {
  method: 'PUT',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"titulo": "JavaScript"}'
})
.then(r => r.json())
.then(r => console.log(r))

```



<h4>HEAD</h4>

HEAD puxa apenas os headers. É uma requisição mais leve pois não puxa o body.

```javascript
const url = 'https://jsonplaceholder.typicode.com/posts/1/';

fetch(url, {
  method: 'HEAD',
})
.then(response => {
  response.headers.forEach(console.log);
  console.log(response.headers.get('Content-Type'));
});

```



<h4>Headers</h4>

É uma forma do servidor mandar a informação pro Browser ou vice-versa.

- **Cache-Control**

Tempo que o arquivo deve ficar em cache em segundos. Ex: public, max-age=3600

- **Content-Type**

Tipo de conteúdo. Ex: text/html; charset=utf-8. Indicar o tipo de arquivo principalmente em métodos POST e PUT.

- **Lista de Headers** - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
