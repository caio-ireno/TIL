<h1 align="center">  Git e GuiHub  </h1>

    

<h2 align="center">Criar chave SSH</h2>

```
ssh-keygen -t ed25519 -C "your_email"
```

Ir para a pasta `.ssh`

```
cat id_25519.pub
```

Copiar a chave `ssh` e inserir no Github.

Agora iniciar o SSH Agent que é uma entidade que vai ficar encarregada de pegar as chaves e lidar com elas.

```
eval $(ssh-agent -s)
```

entregar a chave privada para o agente

```
ssh-add "caminho da chave"
```
 



