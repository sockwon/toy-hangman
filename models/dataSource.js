const { DataSource } = require('typeorm');

  const appDataSource = new DataSource({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'sockwon',
      password: process.env.TYPEORM_PASSWORD,
      database: 'hangman'
  })
appDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error occurred during Data Source initialization", err);
      appDataSource.destroy();
    });
module.exports=appDataSource
