const parse = require('pg-connection-string').parse;
const config = parse(process.env.NODE_ENV === 'test' ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: process.env.NODE_ENV === 'test' ? 
        false : { rejectUnauthorized: false },
      connectTimeout: 30000
    },
    pool: {
      min: 1,
      max: 300,
      idleTimeoutMillis: 30000,
      createTimeoutMillis: 9000000,
      acquireTimeoutMillis: 30000,
      propagateCreateError: false
    },
    debug: false
  },
});