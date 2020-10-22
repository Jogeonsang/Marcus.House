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
      const {categoryId, limit, offset, } = req.query; // categoryId
      let count = 0;
      db.one(`SELECT count(*) FROM product where category = ${categoryId}`).then(function (data) {
          count = Number(data.count)
      })
        db.any(`SELECT id, name, brand_name, image_url, cost, category FROM product WHERE category = ${categoryId} LIMIT ${limit} OFFSET ${offset}`)
            .then(function (data) {
                res.status(200).json({data: {data, hasMore: count > limit}, message: 'success'})
            })
            .catch(function (error) {
                res.status(500).json({err: error, message: 'fail'})
        })
    }
};
