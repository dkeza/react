"use strict";

console.log('Test');

// JSX - Javascript XML

var app = {
    title: "Indecision App",
    subtitle: "Subtitle"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item 1"
        ),
        React.createElement(
            "li",
            null,
            "Item 2"
        )
    )
);

var user = {
    name: 'Pero',
    age: 77,
    location: 'Crvenka'
};
var userName = 'Pero';
var userAge = 77;
var userLocation = 'Crvenka';

var templateUser = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
