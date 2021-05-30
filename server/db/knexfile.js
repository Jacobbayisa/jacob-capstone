module.exports = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "jacob",
    password: process.env.PASSWORD,
    database: process.env.DBNAME,
    charset: "utf8",
  },
};
