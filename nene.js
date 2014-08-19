var crawler = require("crawler").Crawler;
var paginaInicial = "https://github.com/";

var c = new crawler({
	"maxconnections":10,
	"callback":function(error,result,$){

		if(result){
			console.log("Lendo uri:"+result.uri);			
		}

		if ($){
			$("a").each(function(index,a){				
				c.queue(a.href);				
			});
		}
	}

});

c.queue(paginaInicial);