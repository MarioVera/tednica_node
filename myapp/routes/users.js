var express = require('express');
var router = express.Router();

const { serviceSiteMLB, serviceSiteMLA } = require('../services');
const { fetchData } = require('../middlewares');

router.get('/', function(req, res) {
  res.send('response con algo');
});

router.get('/site/MLA', async function (req, res) {
  let result = await serviceSiteMLA();
  res.json(result);
  res.end();

});

router.get('/site/MLB', async function (req, res) {
  let result = await serviceSiteMLB();
  res.json(result);
  res.end();

});

router.get('/site/MLA/categories', fetchData, (req, res) =>{

  const categoriesName = req.initialData.categories.map(e=> e.name);

  res.render('categories', { title: 'Categories MLA', categories: categoriesName});
  res.end();
});

module.exports = router;

