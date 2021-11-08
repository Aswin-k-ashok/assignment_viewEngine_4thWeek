var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let cat=[
    {
      name:'shirts',
      disc:'casual and formal shirts',
      img:"https://bit.ly/3qbiSQp",
    },
    {
      name:'Pants',
       
      disc:'casual and formal pants',
      img:"https://bit.ly/31FFw9p",
    },
    {
      name:'Shoes',
      disc:'all kinds of shoes',
      img:"https://bit.ly/3wlYSvo",
    },
    {
      name:'Acessorys',
      disc:'glasses belts and more',
      img:"https://bit.ly/3mRNTH3",
    },
  ]

  res.render('index', { cat ,admin:false});
});

module.exports = router;
