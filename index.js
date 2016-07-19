module.exports = function(opts){ return opts.request != undefined && opts.response != undefined && opts.tpr != undefined ? require('./lib')(opts).log() : require('./lib')(opts).logger(); };
// module.exports = function(opts){
// 	// if mode == 'local' return logger
// 	//  if mode == 'central' return logger 
//    return require('./lib')(opts);
// }