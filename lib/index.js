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
       var base = conf.BASE.input;
       var mbody = {};
       mbody.msg = {
         response:{
            local : obj.response.statusCode != 304 ? JSON.parse(obj.response.body) : undefined
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
           , tags: obj.options != undefined ? getTags(obj.request, obj.options.TAGS) : undefined
           , route:(obj.request.route) ? obj.request.route : {path:obj.request.path},
           , originalUrl : obj.req.originalUrl
         }
       };
       if(obj.tpr) for(var key in obj.tpr){  mbody.msg.response[key] = obj.tpr[key];  }
       mbody.token = this.adapter.configs.apiKey;
       mbody.app_id = this.adapter.configs.appId;  
       mbody.code = mbody.msg.mcode = parseInt(obj.response.statusCode);
       mbody = ext(obj, mbody);
       this.client.context._sendRequest({form:mbody, url:this.adapter.host+base.input, timeout:this.adapter.configs.timeout, method:"POST"}, function(err,res, data){  console.log(err ? err: data ? data : 'empty');  });
     } else throw Error('invalid input');
  };
  return methods;
}

function valid(obj){
  return obj.request && obj.response && obj.tpr;
}