import * as Sequelize from 'sequelize';

const db = 'newdb'
const username = 'postgres'
const password = 'root'

export const sequelize = new Sequelize(db, username, password, {
  dialect: "postgres",
  host: 'localhost',
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
});
sequelize.authenticate().then(() => 
        console.log('Connected successfully'))
        .catch(err => console.log(err));