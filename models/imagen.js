//imagen.js


var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var Images = mongoose.model('imagen',{
    titulo :String,
    imagen: String

});


var img = new Images({

    titulo : "Angry",
    imagen : "/img/angry.jpg"
    

});


img.save(function(err){
 


   if(err){


    console.log("ERROR ! :"+err);
   }




});



//------------------------------------------------------------------------------------------------>


var img = new Images({

    titulo : "Batman",
    imagen : "/img/batman.jpg"
    

});


img.save(function(err){
 


   if(err){


    console.log("ERROR ! :"+err);
   }


});


//------------------------------------------------------------------------------------------------>

var img = new Images({

    titulo : "bob esponja",
    imagen : "/img/bobesponja.jpg"
    

});


img.save(function(err){
 


   if(err){


    console.log("ERROR ! :"+err);
   }


});


//------------------------------------------------------------------------------------------------>

var img = new Images({

    titulo : "Elmo",
    imagen : "/img/elmo.jpg"
    

});


img.save(function(err){
 


   if(err){


    console.log("ERROR ! :"+err);
   }


});


//------------------------------------------------------------------------------------------------>

var img = new Images({

    titulo : "Spiderman",
    imagen : "/img/spiderman.jpg"
    

});


img.save(function(err){
 


   if(err){


    console.log("ERROR ! :"+err);
   }


});


//------------------------------------------------------------------------------------------------>

var img = new Images({

    titulo : "star wars",
    imagen : "/img/starwars.jpg"
    

});


img.save(function(err){
 


   if(err){


    console.log("ERROR ! :"+err);
   }


});


//------------------------------------------------------------------------------------------------>

var img = new Images({

    titulo : "Superman",
    imagen : "/img/superman.jpg"
    

});


img.save(function(err){
 


   if(err){


    console.log("ERROR ! :"+err);
   }


});


//------------------------------------------------------------------------------------------------>

var img = new Images({

    titulo : "Bart Simpson",
    imagen : "/img/bart.jpg"
    

});


img.save(function(err){
 


   if(err){


    console.log("ERROR ! :"+err);
   }


});


//------------------------------------------------------------------------------------------------>

var img = new Images({

    titulo : "u21",
    imagen : "/img/descarga.jpg"
    

});


img.save(function(err){
 


   if(err){


    console.log("ERROR ! :"+err);
   }


});


//------------------------------------------------------------------------------------------------>


var img = new Images({

    titulo : "u22",
    imagen : "/img/descarga(1).jpg"
    

});


img.save(function(err){
 


   if(err){


    console.log("ERROR ! :"+err);
   }


});


//------------------------------------------------------------------------------------------------>



