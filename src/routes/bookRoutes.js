var express = require('express');
var bookRouter = express.Router();

var books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
    },
    {
        title: 'Les Miserables',
        genre: 'Historical Fiction',
        author: 'Victor Hugo',
        read: false
    },
    {
        title: 'The Dark World',
        genre: 'Fantasy',
        author: 'Henry Kuttner',
        read: false
    },
    {
        title: 'A Journey into the Center of the Earth',
        genre: 'Science Fiction',
        author: 'Jules Verne',
        read: false
    }
    
];

var router = function(nav){

bookRouter.route('/')
   .get(function(req,res){
       res.render('bookListView',{
        title:"Books",
        nav:nav,
        books:books
        });
   });
   
 bookRouter.route('/:id')
    .get(function(req, res){
        
        var id = req.params.id;
        
        res.render('bookView',{
        title:"Books",
        nav: nav,
        book:books[id]
        });
    });
    return bookRouter;
};


module.exports = router;