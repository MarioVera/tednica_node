const { serviceSiteMLA } = require('../services');

const fetchData = async function (req, res, next) {
    let result = await serviceSiteMLA();
    req.initialData = result;
    next();

};

module.exports = { fetchData };

