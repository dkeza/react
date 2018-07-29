console.log('Test');

// JSX - Javascript XML

let app = {
    title: "Indecision App",
    subtitle: "Subtitle",
    options: ['One', 'Two']
}

let template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length>0 ? "Here are your options" : "No options"}</p>
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

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

let templateUser = (
    <div>
        <h1>{user.name ? user.name : 'Anonymus'}</h1>
        {(user.age && user.age>=18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);