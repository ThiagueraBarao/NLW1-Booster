// Pacotes Instalados poara funcionar:
//  npm install typescript -D
//  npx tsc --init
//  npm install @types/express -D
//  npm install ts-node -D
//  Para iniciar a aplicação : npx ts-node src/server.ts
//  npm install ts-node-dev -D
//  Para iniciar a aplicação : npm run dev

import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..','uploads')));

app.listen(3333);