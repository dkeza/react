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

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();