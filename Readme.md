# Teste de Backend

## Stack
- NodeJS com Typescript
- Testes unitários com Jest
- Docker e Docker Compose
- Redis
- Mongo

## Como rodar o projeto

```console
git clone https://github.com/gustavofp/ingaia.git
cd ingaia
```
```console
docker-compose up --build
```
## Arquitetura

O projeto conta com 2 microserviços, o que retorna o valor do metro quadrado (porta 3001) e o que retorna o preço calculado (porta 3000), além de uma instância do MongoDB onde esta armazenado o valor por metro quadrado e uma instância do Redis onde fica o cache do cálculo
```console
GET localhost:3001/square-meter/value/604f4e513c9ef0811c3724c3
```

```console
GET localhost:3000/real-estate/value/150
```
## Hospedagem

O serviço está hospedado em uma máquina EC2 na AWS, o endereço da API é esse:

```console
GET ec2-3-139-100-183.us-east-2.compute.amazonaws.com:3001/square-meter/value/604f4e513c9ef0811c3724c3
```

```console
GET ec2-3-139-100-183.us-east-2.compute.amazonaws.com:3000/real-estate/value/150
```

## Swagger

```console
ec2-3-139-100-183.us-east-2.compute.amazonaws.com:3001/api-docs/
```

```console
Gec2-3-139-100-183.us-east-2.compute.amazonaws.com:3000/api-docs/
