var express = require('express');
var hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.engine('html', require('hbs').__express);
app.use(express.static('public'));

var stacks = {};
var articles = [
        {
            "title": "Test 1",
            "href": "google.com",
            "bg": "test"
        },
        {
            "title": "Test 2",
            "href": "google.com",
            "bg": "test2"
        },
        {
            "title": "Test 3",
            "href": "google.com",
            "bg": "test"
        },
        {
            "title": "Test 4",
            "href": "google.com",
            "bg": "test"
        },
        {
            "title": "Test 5",
            "href": "google.com",
            "bg": "test2"
        },
        {
            "title": "Test 6",
            "href": "google.com",
            "bg": "test"
        },
        {
            "title": "Test 7",
            "href": "google.com",
            "bg": "test"
        },
        {
            "title": "Test 8",
            "href": "google.com",
            "bg": "test2"
        },
        {
            "title": "Test 9",
            "href": "google.com",
            "bg": "test"
        }
];

hbs.registerHelper('push', function(name, context) {
    var stack = stacks[name];
    if (!stack) {
        stack = stacks[name] = [];
    }
    stack.push(context.fn(this));
});

hbs.registerHelper('stack', function(name) {
    var val = (stacks[name] || []).join('\n');

    stacks[name] = [];
    return val;
});

app.get('/', function (req, res) {
    res.render('index', {
        title: 'My favorite veggies',
        figure: articles,
        layout: 'layout'
    });
});

app.listen(3000, function () {
    console.log('Server initialised: http://localhost:3000/');
});
