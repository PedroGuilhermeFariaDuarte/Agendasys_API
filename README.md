# Agendasys_Server

Agendasys Server é uma API para a aplicação Agendasys


## Introdução

Os serviços da Agendasys estão disponiveis através desta API Rest, que quando integrada com a aplicação Agendasys possibilita que todos os pacientes do brasil tenha uma melhor qualidade de vida. 
Para utilizar a API, você precisará de um token no estilo `JWT`, esse token será utilizado para autenticação no serviço e o uso de suas funcionalidades.

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

As respostas das requisições realizadas para a API Agendasys utilizam os códigos convencionais HTTP, indicando sucesso ou falha, sendo que o código 200 responde pelo sucesso e os que iniciam por 4xx pelas falhas, os códigos começando com 500 para apresentar falhas internas

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
