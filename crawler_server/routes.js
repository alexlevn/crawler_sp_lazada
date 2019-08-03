let { getLazadaProduct } = require('./api');

let appRouter = function (app) {

    app.get('/', async function (req, res) {

        let arrUrls = req.query.arrUrls;
        let arrResults = [];
        
        arrResults.push(await getLazadaProduct(arrUrls[0]));
        arrResults.push(await getLazadaProduct(arrUrls[1]));

        res.json({ arrItems: arrResults });
    });
}

module.exports = appRouter;
