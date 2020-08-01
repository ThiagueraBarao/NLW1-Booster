// Pacotes Instalados poara funcionar:
//  npm install typescript -D
//  npx tsc --init
//  npm install @types/express -D
//  npm install ts-node -D
//  Para iniciar a aplicação : npx ts-node src/server.ts
//  npm install ts-node-dev -D
//  Para iniciar a aplicação : npm run dev

import express from 'express';

const app = express();

app.use(express.json());

// Rota: Endereço completo da aplicação
// Recurso: Qual entidade estamos acessando no sistema

// GET: uscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no Back-end
// DELETE: Remover a informação do back-end

// POST http://localhost:3333/users = Criar um Usuário
// GET http://localhost:3333/users = Listar Usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 6


// Request Param : Parâmetros que vem na propria rota que identifica o recurso
// Query Param : Parametros que vem na rota opcionais para filtros e paginação
// Request Body: parâmetros para criação/atualização de informações

const users = [
  'Thiago', // 0
  'André', // 1
  'Diego', // 2
  'Leticia', // 3
  'Renato', // 4
];

app.get('/users', (request, response) => {
  console.log("Query na URL");
  const search = String(request.query.search);
  const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

  console.log(filteredUsers);
  response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
  console.log("Buscar Usuário Único");
  const id = Number(request.params.id);
  const user = users[id];
  response.json(user);
});
  
app.get('/users', (request, response) => {
  console.log("Listagem de Usuários");
  response.json(users);
});

app.post('/users', (request, response) => {
  console.log("Cadastrar Usuário");

  const data = request.body;

  console.log(data);

  const user = {
    name: data.name,
    email: data.email,
  };
  return response.json(user);
});

app.listen(3333);