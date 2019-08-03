var axios = require('axios')
var serverUrl = 'http://localhost:3001'

export function getLazadaProduct(arrUrls = []) {

    var url = `${serverUrl}?arrUrls[]=${arrUrls[0]}&arrUrls[]=${arrUrls[1]}`;
    return axios
        .get(url)
        .then(res => {
            return [res.data.arrItems[0], res.data.arrItems[1]];
        })
        .catch(err => {
            throw new Error('Got error: ', err);
        });
}
