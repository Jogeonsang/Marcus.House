const db = require('../db');

module.exports = {

  /**
   * products list를 불러오는 API
   * @param req
   * @param res
   * @param next
   **/
  async getProducts(req, res, next) {
    const {categoryId, limit = 30, offset = 0, } = req.params; // categoryId
    db.query(`SELECT * FROM products WHERE category_id = ${categoryId} LIMIT ${limit} OFFSET ${offset}`, (error, results) => {
      if (error) {
        res.status(500).json({err: error, message: 'fail'})
      }
      res.status(200).json({payload: results.rows, message: 'success'})
    });
  }
};
