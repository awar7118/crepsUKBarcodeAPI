require('dotenv').config()
module.exports = {
	env: process.env.NODE_ENV || 'development',
	api: process.env.BARCODE_KEE
};
