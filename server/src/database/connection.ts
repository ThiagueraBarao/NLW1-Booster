import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'Ecoleta',
    password : 'Ecoleta',
    database : 'Ecoleta'
  }
  // client: 'sqlite3',
  // connection: {
  //   filename: path.resolve(__dirname, 'dataase.sqlite'),
  // }
});

export default connection;

// Migrations = Histórico do anco de dados;
// Criar Tabelas , Editar Tabelas, Remover Tabelas