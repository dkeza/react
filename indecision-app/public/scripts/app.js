"use strict";

console.log('Test');

// JSX - Javascript XML

var app = {
    title: "Indecision App",
    subtitle: "Subtitle",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var removeAll = function removeAll() {
    app.options = [];
    renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? "Here are your options" : "No options"
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { onClick: removeAll },
            "Remove all"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (e) {
                return React.createElement(
                    "li",
                    { key: e },
                    e
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
