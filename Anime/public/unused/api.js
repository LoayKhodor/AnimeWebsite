// var jQuery = require( "jquery" );
// jQuery.ajax({
// 	async: true,
// 	crossDomain: true,
// 	url: "https://jikan1.p.rapidapi.com/top/anime/1/upcoming",
// 	method: "GET",
// 	headers: {
// 		"x-rapidapi-host": "jikan1.p.rapidapi.com",
// 		"x-rapidapi-key": "cd49a03ea2msh41b414249d8a5e8p1c0119jsn6dd3bc9459dd"
// 	}
// }).done(function (response) {
// 	console.log(response);
// });
//https://rapidapi.com/theapiguy/api/jikan1/

//use the search api - u can get the id & then from the id execute other api
// const request = require('request');

// const regexp = /\/\banime\\\\\/\b[0-9]+/g;
// const idNum = [];
// const options = {
//   method: 'GET',
//   url: 'https://jikan1.p.rapidapi.com/meta/requests/anime/today',
//   headers: {
//     'x-rapidapi-host': 'jikan1.p.rapidapi.com',
//     'x-rapidapi-key': 'cd49a03ea2msh41b414249d8a5e8p1c0119jsn6dd3bc9459dd',
//     useQueryString: true
//   }
// };

// request(options, function (error, response, body) {
// 	if (error) throw new Error(error);
// 	const obj = JSON.stringify(body);
// 	console.log(obj)
// 	const ids = obj.toString().match(regexp);
// 	console.log(ids);
// 	for(x = 0; x<ids.length; x++){
// 		const id = ids[x].substring(9);
// 		idNum.push(id);
// 	}
// 	console.log(idNum);
// });



// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open("GET", "https://jikan1.p.rapidapi.com/search/anime?q=Attack%20on%20Titan");
// xhr.setRequestHeader("x-rapidapi-host", "jikan1.p.rapidapi.com");
// xhr.setRequestHeader("x-rapidapi-key", "cd49a03ea2msh41b414249d8a5e8p1c0119jsn6dd3bc9459dd");

// xhr.send(data);