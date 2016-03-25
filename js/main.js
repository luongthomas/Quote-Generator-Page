$("#getMessage").on("click", function(data) {
  $.ajax({
    beforeSend: function(request) {
      request.setRequestHeader("X-Mashape-Key", 'U1VsOHe4dlmshIGOpdMQbYJjYKORp1N7zIFjsnoMWVenNOl6bO');
    },
    dataType: "json",
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
    success: function(data) {

	//Your code
	var text = data.quote;
	var author = data.author;
	$("#getMessage").on("click", function(data) {});

	document.getElementById("quote").innerHTML = text;
	document.getElementById("author").innerHTML = author;
	
	
	if(!$("#tweet").is(":visible") == true){
	   console.log("visible");

	} else{
		console.log("invisible");
	}

	var twitterbtn = document.getElementById("tweet");
	if(!twitterbtn.getAttribute("data-text")){
		var att = twitterbtn.createAttribute("data-text");
		att.value = text + " - " + author;

	}  else {
      // Changes the tweet text to the quote and author of the current displayed quote
      document.getElementById("tweet").setAttribute("data-text", text + " - " + author);
 	}
 	twitterbtn.removeAttribute("href");

      // this builds the button url, obtained from the Twitter dev website
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],
		p=/^http:/.test(d.location)?'http':'https';
		if(!d.getElementById(id)){js=d.createElement(s);
		js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
    }
  });
});