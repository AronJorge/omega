var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var app = express();



// Confiruracion del cuerpo de la rutas
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

// Ruta pincipal todas las rutas se pueden modificar (Cambiar nombres)
router.get('/', function(req, res) {
    res.send("Tos que ñompiro");
});

app.use(router);

var jsonTodos = {
    var1: "Dato uno",
    var2: "Dato 2"
};

var jsonTodos = {
    var1: "Dato uno"
}


app.get('/api/todos', function(req, res) {
    console.log("dentro");
    res.jsonp(json);
});

app.get('/api/uno/:dato', function(req, res) {
    //Aqui pudes ver el dato que envias a consola
    console.log(req.params.dato);
    res.jsonp({
        var1: "Dato uno"
    });
});

app.post('/api/guardar', function(req, res) {
    //tambien para que veas el datos enviado 
    // Envia este asi
    //{"var1": "Dato uno","var2": "Dato 2"}
    console.log(req.body);
    console.log(req.body);
    res.send(req.body);
});



app.delete('/api/eliminar/:dato', function(req, res) {
    console.log(req.params.dato);
    res.send("Eliminado");
});

app.put('/api/actualizar/:dato', function(req, res) {
    console.log(req.params.dato);
    console.log(req.body);
    res.send("actualizado");
});

app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book ono dos');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  })
  .delete(function(req, res){
  	res.send("eliminado")
  });


// Iniciacion del servidor, el puerto lo puedes cambiar y tiene que ser mayor de 1100 ¡creo!
app.listen(2000, function() {
    console.log("Esta es la url de iniciacion http://localhost:2000");
});