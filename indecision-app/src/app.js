console.log('Test');

// JSX - Javascript XML

let template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);


let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);