const pgp = require('pg-promise')(/!* options *!/)
const db = pgp('postgres://marcus:jung781@localhost:5432/marcus_house_db')

module.exports = db
