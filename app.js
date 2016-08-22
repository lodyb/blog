var express = require('express');
var hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.engine('html', require('hbs').__express);
app.use(express.static('public'));

var stacks = {};

hbs.registerHelper('push', function(name, context) {
    var stack = stacks[name];
    if (!stack) {
        stack = stacks[name] = [];
    }

    stack.push(context.fn(this)); // for older versions of handlebars, use stack.push(context(this));
});

hbs.registerHelper('stack', function(name) {
    var val = (stacks[name] || []).join('\n');

    // clear the stack
    stacks[name] = [];
    return val;
})
;
app.get('/', function (req, res) {
    res.render('index');
});

app.listen(3000, function () {
    console.log('Server initialised: http://localhost:3000/');
});
