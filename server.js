var app = require('express')()

app.get('/', function (req, res) {
  res.send('Hello World!')
}).listen(8080, function(){
	console.log('Example app listening on port 8000!')
})
