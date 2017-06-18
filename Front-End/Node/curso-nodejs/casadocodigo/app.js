var app = require('./config/express')();
var produtoRotas = require('./app/routes/produtos')(app);

app.listen(3000, function() {
    console.log('Aplicação NodeJS e Express Rodando');
});