var _ = require('type-util');
var conf = require('./cb');
module.exports = function(options){
  var methods = {};
  methods.logger = function(){
     return (_.isEmpty(options.appId) || _.isEmpty(options.apiKey) || options.mode == 'local' || options.mode == undefined) ? require('./local')() : require('./centre.js')(options); 
  };
  methods.log = function(){
     var obj = options;
        if(valid(obj)){
   var base = this.client.ibase;
   var mbody = {};
   mbody.msg = {
     response:{
        local : obj.response.statusCode == 304 ? undefined : _.isObject(obj.response.body) ? obj.response.body : _.isString(obj.response.body) ? obj.response.body : undefined
     },
     request:{
       body:{
         body:obj.request.body, 
         query:obj.request.query,
         params:obj.request.params
       }
       , ipxf:xforwardip(obj.request)
       , headers: obj.request.headers
       , ip:obj.request._remoteAddress
       , timestamp:new Date().toISOString()
       , tags: getTags(obj.request, this.client.configs.TAGS)
       , route:(obj.request.route) ? obj.request.route : {path:obj.request.path}
       , method: obj.request.method
     }
   };
   if(obj.tpr) for(var key in obj.tpr){  mbody.msg.response[key] = obj.tpr[key];  }
   mbody.token = this.adapter.configs.apiKey;
   mbody.app_id = this.adapter.configs.appId;  
   mbody.code = mbody.msg.mcode = parseInt(obj.response.statusCode);
   mbody = ext(obj, mbody);
   this.client.context._sendRequest({body:mbody, url:this.adapter.host+this._base, timeout:this.adapter.configs.timeout, method:"POST"}, function(err,res, data){  /**/  });
 } else throw Error('invalid input');
  return methods;
}

function valid(obj){
  return obj.request && obj.response && obj.tpr;
}

function getTags(req, tags){
  tags = tags || {};
  return { splitter : tags.SPLITTER || '>',tags: tags[req.route.path || req.path] } || {};
}