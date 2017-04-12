$('#my_elem').click(function() {
    $('#output').html(function(i, val) { return val*1+1 });
});

$('#elem2').append('<img src = "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496">');

var $body = $('body');
var $title = $('.title');
var $title2 = $('.title2');

$title.text("Cat1");
$title2.text("Cat2");
