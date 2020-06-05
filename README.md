# Ecoleta Server API

![alt text](https://github.com/marciocamello/nlw-ecoleta-server/blob/master/capa.jpeg)

:rocket: Technologies

- NodeJS
- AdonisJS 5 Alpha
- Typescript

:blue_book: Refs

- https://www.typescriptlang.org/docs/home/
- https://knexjs.org/
- https://expressjs.com/en/4x/api.html

## API Tools

Import this file in Insomnia
[https://insomnia.rest/](https://insomnia.rest/)

```shell script
insomnia.json
```

API Docs

- Endpoint Development `http://localhost:3333`
- Endpoint Production `https://ecoleta-server.herokuapp.com`

**Items**

### `GET /items`    

List items

Response
Status 200
```json
[
  {
    "id": 1,
    "title": "Lâmpadas",
    "image_url": "http://192.168.0.101:3333/uploads/lampadas.svg"
  },
  {
    "id": 2,
    "title": "Pilhas e Baterias",
    "image_url": "http://192.168.0.101:3333/uploads/baterias.svg"
  },
  {
    "id": 3,
    "title": "Papéis e Papelão",
    "image_url": "http://192.168.0.101:3333/uploads/papeis-papelao.svg"
  },
  {
    "id": 4,
    "title": "Resíduos Eletrônicos",
    "image_url": "http://192.168.0.101:3333/uploads/eletronicos.svg"
  },
  {
    "id": 5,
    "title": "Resíduos Orgânicos",
    "image_url": "http://192.168.0.101:3333/uploads/organicos.svg"
  },
  {
    "id": 6,
    "title": "Óleo de Cozinha",
    "image_url": "http://192.168.0.101:3333/uploads/oleo.svg"
  }
]
```

**Create Points**

### `POST /points`    

Create a new user account

  * `Headers`
  * `Content-Type: application/json`

Body
```json
{
	"name": "Nome da Entidade",
	"email": "emaildaentidade@gmail.com",
	"whatsapp": "37900000000",
	"latitude": -10.1540336,
	"longitude": -20.9159928,
	"city": "Divinopólis",
	"uf": "MG",
	"items": [1, 2, 3]
}
```

Response
Status 200
```json
{
  "id": 3,
  "image": "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "name": "Nome da Entidade",
  "email": "emaildaentidade@gmail.com",
  "whatsapp": "37900000000",
  "latitude": -10.1540336,
  "longitude": -20.9159928,
  "city": "Divinopólis",
  "uf": "MG"
}
```

**Filter Points**

### `GET /points/?city=city&uf=MG&items=1,2,4`    

List items

Response
Status 200
```json
[
  {
    "id": 3,
    "image": "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
    "name": "Nome da Entidade",
    "email": "emaildaentidade@gmail.com",
    "whatsapp": "37900000000",
    "latitude": -10.15,
    "longitude": -20.92,
    "city": "Divinopólis",
    "uf": "MG",
    "created_at": "2020-06-05T01:12:04.000Z",
    "updated_at": "2020-06-05T01:12:04.000Z"
  }
]

```
**Show Point by ID**

### `GET /points/:id`    

List items

Response
Status 200
```json
[
  {
    "point": {
      "id": 3,
      "image": "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      "name": "Nome da Entidade",
      "email": "emaildaentidade@gmail.com",
      "whatsapp": "37900000000",
      "latitude": -10.15,
      "longitude": -20.92,
      "city": "Divinopólis",
      "uf": "MG",
      "created_at": "2020-06-05T01:12:04.000Z",
      "updated_at": "2020-06-05T01:12:04.000Z"
    },
    "items": [
      {
        "title": "Lâmpadas"
      },
      {
        "title": "Pilhas e Baterias"
      },
      {
        "title": "Papéis e Papelão"
      }
    ]
  }
]
```
