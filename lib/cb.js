module.exports = {
	BASE : {
		input:'/input', output:'/output',rbase:'/gtV1.0'
	},
	CB_CRITERIA  :{
		l : {type:'boolean', valid: function(v){ return v === true || v === false ? v : true; }},
		f : {url:''},
		sms:{number: '', rule:''},
        email:{email:'',rule:''},
	},
	EXEC_CRITERIA :{
		CONFIGURED: ['def','d','m'],
	    ALLOWED_CRIT : ['def','d','m','c','e','loc','save']
	}
};	