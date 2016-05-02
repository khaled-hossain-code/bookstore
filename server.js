var express = require('express');
var app = express();
var path = require('path');
var port = 3000;
var nav = [
            {
                Link:'/Books',
                Text:'Book'
            },
            {
                Link:'/Authors',
                Text:'Author'
            }];
var bookRouter = require('./src/routes/bookRoutes')(nav);

//view engine setup
app.set('views', path.join(__dirname, './src/view'));
app.set('view engine', 'ejs');

//use middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use('/Books', bookRouter);


app.get('/', function(req,res){
    res.render('index',{
        title:"hello from ejs",
        nav:nav
        });
});

app.listen(port,function(err){
   console.log("server is running on port:" + port); 
});


 