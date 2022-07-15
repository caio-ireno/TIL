  <h1 align="center">  Rota e Querystring  </h1>

* [Rota](#Rota)

* [Querystring](#Querystring)

    

  <h2 align="center">Rota</h2>
  
 Uma rota em uma API é um “caminho” que será “chamado” por uma aplicação ou cliente e responderá alguma informação.

Uma rota está diretamente relacionada a URL, ou seja, também funciona como um localizador de um recurso. A diferença é que acrescenta a possibilidade de utilizar parâmetros de rota. Por exemplo: considere um site de musica `musica.to` que permite acessar a musica "Always", cujo compositor é Bon Jovi, está na categoria "rock" e foi lançada em 1994, por meio do URL:

```
https://musica.to/musica/rock/1994/always/bon-jovi
```

Há informações no URL que pertencem à musica e mudam de uma musica para outra:

- **categoria:** rock
- **ano:** 1994
- **titulo:** always
- **identificador:** Bon Jovi

Analisando URLs de outras musicas alguém poderia chegar à conclusão de que há um padrão:

```
/musica/categoria/ano/titulo/compositor
```

Independentemente de possuir parâmetros de rota, uma rota é um padrão. Cada uma dessas informações (categoria, ano, titulo, compositor), que muda de uma musica para outra, pode ser representada como um parâmetro de rota.

Criar rotas é basicamente construir uma estrutura em um programa único, que sempre é chamado, e que vai interpretar a URL e retornar uma página gerada dinamicamente conforme o que foi informado na URL.

A implementação desse conceito pode variar entre frameworks, mas provavelmente as mesmas funcionalidades estão disponíveis:

- definir uma rota (e, opcionalmente, usar parâmetros de rota)
- identificar valores dos parâmetros de rota

Além disso, como URLs são localizadores de recursos, rotas também servem para esse propósito, ou seja, uma rota está associada algum recurso e é uma forma de acessá-lo.


<h3 align="center">Rotas_no_Express</h3>



<h2 align="center">Querystring</h2> 

Uma `Query string` é parte de um URL que atribui **valores** a **parâmetros especificados**. Geralmente inclui campos adicionados a uma URL base por um navegador da Web ou outro aplicativo cliente, por exemplo, como parte de um HTML, escolhendo a aparência de uma página ou saltando para posições no conteúdo multimídia.

Um servidor Web pode manipular uma solicitação HTTP (Hypertext Transfer Protocol) lendo um arquivo de seu sistema de arquivos com base no caminho da URL ou manipulando a solicitação usando uma lógica específica para o tipo de recurso. Nos casos em que uma lógica especial é invocada, a `Query String` estará disponível para essa lógica para uso em seu processamento, juntamente com o componente de caminho da URL.

O URL típico que contém uma `query string` é o seguinte:

```
https://example.com/over/there?name=ferret
```

Quando um servidor recebe uma solicitação para tal página, ele pode executar um programa, passando a `query string`, que neste caso é `name=ferret`, inalterada para o programa. O **ponto de interrogação** é usado como separador e não faz parte da `query string`.

```
https://example.com/path/to/page?name=ferret&color=purple
```

A estrutura exata da `query string` não é padronizada. Os métodos usados ​​para analisar a `query string` podem diferir entre os sites.


