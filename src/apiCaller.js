const config = require('./config')
require('isomorphic-fetch');
const api = config.api
const apiUrl ='https://api.barcodelookup.com/v3/products?'

const getAPIdata = async() => {

    try{
    const url = apiUrl + "barcode=077341125112&formatted=y&key=" + api;
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.products)
} 
    catch (err) { 
                console.log("error")
                throw err 
            };
}

getAPIdata();


module.exports = {getAPIdata};
