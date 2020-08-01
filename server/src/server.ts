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

app.get('/users', (request,response) => {
  console.log("Listagem de Usuários");
  console.log(request.query);
  response.json(
    [
      'Thiago',
      'André',
      'Diego',
      'Leticia',
      'Renato',
    ]
  );

})

app.listen(3333);