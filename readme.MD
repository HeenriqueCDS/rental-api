# Rental API - FIAP

API criada para atividade da FIAP WebServices
# Acessando a API
A API está hospedada no endereço:
https://fiap-rental-api.onrender.com/

Ela está aberta para público, e você pode usar algum client de requisição http, recomendandos insomnia ou postman (disponibilizamos requests collections de para ambos ambientes)
# Como executar a API
Aqui estão alguns passos para executar a api de forma local na sua máquina
## Requisitos
**Node.js**: https://nodejs.org/pt-br
**Insomnia**: https://insomnia.rest/download
## Comandos para executar

A execução da api é bem simples, com o Node instalado você  também terá o **Node Package Manager** também conhecido como *NPM*, a partir daí, dentro da pasta do projeto você executará os seguintes comandos
```
npm install
npx prisma migrate dev
npx prisma generate
npm run dev
```
É previsto que a api rode tranquilamente em ambiente de desenvolvimento com após esses comandos
# Rotas da API
## /stations
- **Find all**
Não exige parâmetros ou body, retorna um JSON com todos os registros disponíveis 
> Método: *GET*

- **Find one**
Exige um parâmetro de rota ```/stations/ca7d3057-7ed9-4e79-ad43-255d65d3feb2```
Retorna um registro caso exista um com id especificado, caso o contrário o retorno será ```null```
> Método: GET

- **Create**
Cria uma nova estação,, para isso exige um body em formato JSON, retorna *201* 
```json
{
"name": "Paulista",
"address": "Av. Paulista",
"description": "Estação de Bike da paulista",
"latitude": 0,
"longitude": 0,
"capacity": 50
}
```
> Método: POST

- **Update**
Atualliza os dados de um registro, recebe o id do registro a ser alterado pela rota 
``/stations/ca7d3057-7ed9-4e79-ad43-255d65d3feb2``, o body é semelhante a requisição interior, mas os valores são opcionais sendo pelo menos um necessário, retorna *204*
> Método: PUT

- **Delete**
Deleta um registro da base, recebe o id do registro a ser deletado pela rota
``/stations/ca7d3057-7ed9-4e79-ad43-255d65d3feb2``
Retorna *204*
> Método: DELETE

## /bikes
- **Find all**
Não exige parâmetros ou body, retorna um JSON com todos os registros disponíveis 
> Método: *GET*

- **Find one**
Exige um parâmetro de rota ```/bikes/ca7d3057-7ed9-4e79-ad43-255d65d3feb2```
Retorna um registro caso exista um com id especificado, caso o contrário o retorno será ```null```
> Método: GET

- **Create**
Cria uma nova estação,, para isso exige um body em formato JSON, é necessário que o valor "stationId" seja um id válido, retorna *201* 
```json
{
"stationId": "59482b65-0358-4fc4-a9e3-66160558c753",
"name": "Monark"
}
```
> Método: POST

- **Update**
Atualliza os dados de um registro, recebe o id do registro a ser alterado pela rota 
``/bikes/ca7d3057-7ed9-4e79-ad43-255d65d3feb2``, o body é semelhante a requisição interior, mas os valores são opcionais sendo pelo menos um necessário, retorna *204*
> Método: PUT

- **Delete**
Deleta um registro da base, recebe o id do registro a ser deletado pela rota
``/bikes/ca7d3057-7ed9-4e79-ad43-255d65d3feb2``
Retorna *204*
> Método: DELETE

## /users
- **Find all**
Não exige parâmetros ou body, retorna um JSON com todos os registros disponíveis 
> Método: *GET*

- **Find one**
Exige um parâmetro de rota ```/users/ca7d3057-7ed9-4e79-ad43-255d65d3feb2```
Retorna um registro caso exista um com id especificado, caso o contrário o retorno será ```null```
> Método: GET

- **Create**
Cria uma nova estação,, para isso exige um body em formato JSON, retorna *201* 
```json
{
"name": "Nome do usário",
"email": "email@dousuario.com",
"password": "senhamuitoforte123"
}
```
> Método: POST

- **Update**
Atualliza os dados de um registro, recebe o id do registro a ser alterado pela rota 
``/users/ca7d3057-7ed9-4e79-ad43-255d65d3feb2``, o body é semelhante a requisição interior, mas os valores são opcionais sendo pelo menos um necessário, retorna *204*

> Método: PUT
- **Delete**
Deleta um registro da base, recebe o id do registro a ser deletado pela rota
``/users/ca7d3057-7ed9-4e79-ad43-255d65d3feb2``
Retorna *204*

> Método: DELETE

## /rentals
- **Find all**
Não exige parâmetros ou body, retorna um JSON com todos os registros disponíveis 
> Método: *GET*

- **Find one**
Exige um parâmetro de rota ```/rentals/ca7d3057-7ed9-4e79-ad43-255d65d3feb2```
Retorna um registro caso exista um com id especificado, caso o contrário o retorno será ```null```
> Método: GET

- **Create**
Cria uma nova estação, para isso exige um body em formato JSON, retorna *201* 
```json
{
"userId": "ca7d3057-7ed9-4e79-ad43-255d65d3feb2",
"bikeId": "ca7d3057-7ed9-4e79-ad43-255d65d3feb2",
"previewedEnd": "2023-04-18T20:51:00.277Z"
}
```
> Método: POST
- **Update**
Atualliza os dados de um registro, recebe o id do registro a ser alterado pela rota 
``/rentals/ca7d3057-7ed9-4e79-ad43-255d65d3feb2``, o body é semelhante a requisição interior, mas os valores são opcionais sendo pelo menos um necessário, retorna *204*
> Método: PUT

- **Delete**
Deleta um registro da base, recebe o id do registro a ser deletado pela rota
``/rentals/ca7d3057-7ed9-4e79-ad43-255d65d3feb2``
Retorna *204*
> Método: DELETE

