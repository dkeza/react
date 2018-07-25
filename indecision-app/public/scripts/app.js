console.log('Test');

// JSX - Javascript XML

//let template = <p>This is JSX from app.js!</p>

let template = React.createElement(
    "h1",
    { id: "someid" },
    "Something new"
)

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);