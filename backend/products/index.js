const db = require('../db');
/*const pgp = require('pg-promise')(/!* options *!/)
const db = pgp(`postgres://marcus:jung781@localhost:5432/marcus_house_db`)*/

module.exports = {

  /**
   * products list를 불러오는 API
   * @param req
   * @param res
   * @param next
   **/
  async getProducts(req, res, next) {
    const {categoryId, limit=24, offset=0, } = req.query; // categoryId
    db.any(`SELECT * FROM product WHERE category = ${categoryId} LIMIT ${limit} OFFSET ${offset}`)
        .then(function (data) {
          console.log(data)
            res.status(200).json({data: data, message: 'success'})
        })
        .catch(function (error) {
            res.status(500).json({err: error, message: 'fail'})
    })
  }
};
