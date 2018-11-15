const angularUniversal  = require('angular-universal-express-firebase');
exports.trigger = angularUniversal.trigger({
	index: __dirname + '/index.html',
	main: __dirname + '/dist-universal/main.js',
	enableProdMode: true,
	cdnCacheExpiry: 1200,
	browserCacheExpiry: 600
});