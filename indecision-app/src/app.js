console.log('Test');

// JSX - Javascript XML

let app = {
    title: "Indecision App",
    subtitle: "Subtitle"
}

let template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

let user = {
    name: 'Pero',
    age: 77,
    location: 'Crvenka'
}
let userName = 'Pero';
let userAge = 77;
let userLocation = 'Crvenka';

let templateUser = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);