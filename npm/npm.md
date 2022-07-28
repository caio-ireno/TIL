# NPM

NPM (Node Package Manager) é um gerenciador de pacotes feito para `node.js`. 

Com ele, é possível instalar ferramentas, softwares, etc...


Exemplo: ```npm install loadsh```

Sempre que iniciar um projeto novo e esse projeto fazer uso de dependências, rode `npm init`

Esse comando da algumas configurações como nome, versão, descrição, entre outras. 

Em seguida é criado um arquivo `package.json` com as descrições do projeto.

Caso seu projeto faça uso de uma dependência como `jquery` ou `Express`, assim que você instalar usando o comando `npm install`, é adicionado ao arquivo `package.json` um item `dependencies`. Esse item diz que, esse projeto (programa) tem dependia do `jquery` e do `Express` facilitando que outro desenvolvedor possa dar continuidade no projeto, pois, a pasta `node_modules` é local na sua maquina.

Considerando que você esta desenvolvendo um projeto, que tenha 32 dependências, descritas no arquivo `package.json` e precisa que outro desenvolvedor termine o trabalho. Ele nao precisa instalar as 32 dependências uma a uma, ele pode rodar o comando ` npm install` que ira instalar tudo o que estiver dentro de `dependencies`.

ou seja:

package.json

Arquivo local com as configurações e dependências de pacotes NPM

`$ npm init`

Inicia uma nova configuração local do npm.

`$ npm install`

Instala todas as dependências listadas no arquivo package.json

## Alguns comandos NPM

`$ npm install lodash`

Instala o pacote lodash no diretório atual da linha de comando

`$ npm install eslint -g`

Instala o eslint globalmente (No mac é necessário o sudo para instalar globalmente.)

`$ npm update lodash`

Atualiza o pacote lodash

`$ npm uninstall lodash`

Desinstala o pacote lodash
