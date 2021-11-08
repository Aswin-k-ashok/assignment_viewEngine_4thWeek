var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  let stocks=[
    {
      item:"",
    },
    {
      item:"shirt",
      brand:"h&m",
      modelNo:"s3554",
      stock:"350"
    },
    {
      item:"shoe",
      brand:"nike",
      modelNo:"naj34",
      stock:"20"
    },
    {
      item:"pants",
      brand:"levis",
      modelNo:"lv711",
      stock:"100"
    },
    {
      item:"belt",
      brand:"lacoste",
      modelNo:"lco20",
      stock:"55"
    },
    {
      item:"pants",
      brand:"uspa",
      modelNo:"usp11",
      stock:"40"
    },
    {
      item:"shirt",
      brand:"levis",
      modelNo:"lvs21",
      stock:"129"
    },
  ]
  res.render('admin', {stocks});
});

module.exports = router;
