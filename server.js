
var express = require("express"),
    app     = express(),
    http    = require("http"),
    server  = http.createServer(app),
    port = process.env.PORT || 3000;
    mongoose = require("mongoose");
 
// Configuramos la app para que pueda realizar métodos REST (busqueda de datos en la base)
app.configure(function () {
  app.use(express.bodyParser()); // JSON parsing
  app.use(express.methodOverride()); // HTTP PUT and DELETE support
  app.use(app.router); // simple route management
});


app.use('/img', express.static(__dirname + '/models/img'));
app.use('/emergente', express.static(__dirname + '/emergente/emergente'));

routes = require('./routes/tshirt')(app); 

 
// Conexión


mongoose.connect('mongodb://localhost/tshirts', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});


var modeloimagen = mongoose.model('imagenes',{
 
     titulo : String,
     imagen : String



});
 
// petición GET del root que sólo muestre "Hello world!"
app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});


 
// El servidor escucha en el puerto 3000
server.listen(port, function() {
  console.log("Node server running on http://localhost:3000 or online port");
});




var img = new modeloimagen({

    titulo : "Angry",
    imagen : "/img/angry.jpg"
    

});


img.save(function(err){
 


   if(err){


    console.log("ERROR ! :"+err);
   }


});



module.exports = mongoose.model('imagenes', modeloimagen);

