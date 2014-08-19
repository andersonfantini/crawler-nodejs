var crawler = require("crawler").Crawler;
var paginaInicial = "";
var regexEmail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;

var c = new crawler({
	"maxconnections":10,
	"callback":function(error,result,$){

		if(result){
			console.log("Lendo uri:"+result.uri);
			var emailCapturado = result.body.match(regexEmail);
			if (emailCapturado && emailCapturado.length>0){
				console.log("emailCapturado: "+emailCapturado);
			}
		}

		if ($){
			$("a").each(function(index,a){				
				c.queue(a.href);				
			});
		}
	}

});

c.queue(paginaInicial);