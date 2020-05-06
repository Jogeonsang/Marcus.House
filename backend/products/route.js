const express = require('express');
const productApis = require('./index');

const router = express.Router();

router.get('/:categoryId', productApis.getProducts); // 상품 리스트를 불러오는 API

module.exports = router
