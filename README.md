# Agendasys Server

Agendasys Server é uma API para a aplicação Agendasys


## Introdução

Os serviços da Agendasys estão disponiveis através desta API Rest, que quando integrada com a aplicação Agendasys possibilita que todos os pacientes do brasil tenha uma melhor qualidade de vida. 
Para utilizar a API, você precisará de um token no estilo `JWT`, esse token será utilizado para autenticação no serviço e o uso de suas funcionalidades.

## Dependências

1. [Node.JS](https://nodejs.org/en/)
2. [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
3. [MongoDB](https://www.mongodb.com/try/download/community)

## Respostas da API

Toda resposta retornada pela API vem em formato `JSON` contendo um cabeçalho padrão, o cabeçalho contém as informações sobre a requisição e os dados próprios da resposta, que ficam dentro do campo `data`.


```json 
{
  "code": "CODIGO STATUS DA REQUISIÇÃO (2XX,4XX,5XX)",
  "success": "UMA MENSAGEM DE SUCESSO OU ERRO",
  "details": {
      "code": "CODIGO DO ERRO",
      "error": "DESCRIÇÃO MAIS DETALHADA DO ERRO"
  },
  "data": "UM OBJETO COM TODOS OS DADOS PRÓPRIOS DA RESPOSTA"
```

## Códigos HTPP

As respostas das requisições realizadas para a API Agendasys utilizam os códigos convencionais HTTP, indicando sucesso ou falha, sendo que o código 200 responde pelo sucesso e os que iniciam por 4xx pelas falhas, os códigos começando com 500 para apresentar falhas internas.

## End-Points

Nesta versão a API funciona com duas entidades, `user` e `schedule`, veja abaixo os respectivos endpoints:

##### User
  1. Para criar um novo usuário: `/user/create`
    a seguinte estrutura de dados deve ser enviada
     ```json
      {
        "name":"João da Silva",
        "email":"joao_da2_silva@outlook.com.br",
        "phone":111111,
        "health_problems": [
          {
            "problem": "Falta de ferro no sangue"
          }
        ]
       }
     ``` 
     
   2. Para atualizar os dados de um usuário: `/user/update/id_do_usuario`
      a seguinte estrutura de dados deve ser enviada
       ```json
        {
          "name":"João da Silva",
          "email":"joao_da2_silva@outlook.com.br",
          "phone":111111,
          "health_problems": [
            {
              "problem": "Falta de ferro no sangue"
            }
          ]
         }
       ``` 
  3. Para deletar um usuário: `/user/delete/id_do_usuario`
      nenhuma estrutura de dados deve ser enviada
   
  4. Para visualizar um novo usuário: `/user/show/id_do_usuario`
      nenhuma estrutura de dados deve ser enviada
  
  5. Para visualizar todos os usuário: `/user/all/`
      nenhuma estrutura de dados deve ser enviada
      
      
 ##### Schedule
  1. Para criar um novo agendamento: `/schedule/create`
    a seguinte estrutura de dados deve ser enviada
     ```json
      {
        "id_user":"5f66765fd791232348aaad97",
        "id_responsible":"5f6677d9d791232348aaad99",
        "date_schedule":"Sat Sep 19 2020 19:47:42 GMT-0300",
        "qrcode":"fsdf2344343",
        "phone": "5511963092396"
      }
     ``` 
     
   2. Para atualizar os dados de um agendamento: `/schedule/update/id_do_agendamento`
      a seguinte estrutura de dados deve ser enviada
       ```json
        {
          "id_user":"5f66765fd791232348aaad97",
          "id_responsible":"5f6677d9d791232348aaad99",
          "date_schedule":"Sat Sep 30 2020 19:47:42 GMT-0300",
          "qrcode":"fsdf2344343",
          "phone": "5511963092396"
        }
       ``` 
  3. Para deletar um usuário: `/schedule/delete/id_do_agendamento`
      nenhuma estrutura de dados deve ser enviada
   
  4. Para visualizar um novo usuário: `/schedule/show/id_do_usuario`
      nenhuma estrutura de dados deve ser enviada
      
 ## Instalação e execução
 
 Vamos seguir o passo-a-passo para a API funcionar perfeitamente em seu computador :D
 
 1. Em um terminal de sua prefêrencia, acesse um diretorio e execute o seguinte comando 
 ```bash 
    git clone https://github.com/PedroGuilhermeFariaDuarte/Agendasys_Server.git
 ```
 
 2. Feito isso, agora acesse a pasta(Agendasys_Server) criada pelo passo anterior e execute o seguinte comando
 ```bash 
    yarn install
 ```
 
 Com o source da API baixado e instalado, vamos agora instalar algumas dependências no seu computador :D
 
 ### Banco de Dados
 
 Vamos instalar o banco de dados MongoDB, acesse [MongoDB](https://www.mongodb.com/try/download/community) e siga os passos de download e instalação.
 
 Com o banco de dados instalado, vamos passar os dados de acesso como host, username, password para um arquivo da API
 
 Agora, vamos abrir a pasta Agendasys_Server com o Explorer do Windows, por exemplo, e abrir o arquivo `.env.example` no bloco de notas 
 ou em uma IDE/Editor de Texto de sua preferência.
 
 Com o arquivo aberto, você verá algo parecido com isto: 
 
 ```env
   # API
   API_PORT = YOUR PORT API

   # DATABASE MONGODB
   DB_USERNAME = YOUR USERNAME
   DB_PASSWORD = YOUR PASSWORD
   DB_CLUSTER = YOUR LOCALHOST
   DB_NAME = YOUR DATABASE NAME

   # SERVICES Zenvia
   TOKEN_ZENVIA = UM TOKEN
 ```
 
 Agora, insira as informações de acesso ao banco de dados instalado anteriormente nos seus respectivos locais, por exemplo:
 ```bash
  # DATABASE MONGODB
   DB_USERNAME = joaosilva
   DB_PASSWORD = 3dfdghs69
   DB_CLUSTER = 127.0.0.1
   DB_NAME = silvadados
 ```
 
 ### Definindo a porta de execução e acesso da API
 
 Com o arquivo `.env.example` aberto, você verá algo parecido com isto: 
 
 ```env
   # API
   API_PORT = YOUR PORT API

   # DATABASE MONGODB
   DB_USERNAME = YOUR USERNAME
   DB_PASSWORD = YOUR PASSWORD
   DB_CLUSTER = YOUR LOCALHOST
   DB_NAME = YOUR DATABASE NAME

   # SERVICES Zenvia
   TOKEN_ZENVIA = UM TOKEN
 ```
 
 Agora, insira as informações de execução e acesso a API, por exemplo:
 
 ```bash
   # API
   API_PORT = 9988
 ```
 
 Pronto :D, renomeia o arquivo `.env.example` para `.env`., agora vamos executar a API.
 
 Para iniciar a API vamor abrir o terminal e acessar a pasta (Agendasys_Server), criada nos primeiros passos.
 
 Com a pasta aberta no terminal você poderá executar os seguintes comandos:
 
 1. Para iniciar a API no seu modo de desenvolvimento
   ```bash
    yarn dev:server
   ```
 2. Para gerar uma versão de produção 
   ```bash 
    yarn dev:build
   ```
 
 Agora sim :D, terminamos. 
 
 
 
