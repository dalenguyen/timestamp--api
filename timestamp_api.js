var app = require('express')()
var moment = require('moment')
var fs = require('fs')
var path = require('path')

var port = process.env.PORT || 8080

app.get('/', function (req, res) {
	// Get file for the homepage
	var fileName = path.join(__dirname, 'index.html');
	res.sendFile(fileName, function (err){
		if(err) console.log(err)
		else console.log('Sent', fileName)
	})
})

app.get('/:query', function(req, res){	
	if(req.params.query){	
	
		var myDate
		date = req.params.query

		// date conversion
		if(/^\d{8,}$/.test(date)){
			myDate = moment(date, "X")							
		}else{		
			myDate = moment(date, "MMMM D, YYYY")
		}
		
		if(myDate.isValid()){ // moment function to validate date
			res.json({
				unix: myDate.format("X"),
				natural: myDate.format("MMMM D, YYYY")
			})			
		}else{
			res.json({
				unix: null,
				natural: null
			})
		}		
	}
})

app.listen(port, function(){
	console.log('I am listening on: ' + port)
})
