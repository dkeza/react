const app = {
    title: 'Visibility togle',
    details: '',
    buttonCaption: 'Show details'
}

const showDetails = () => {
    if (app.details.length===0) {
        app.details = 'Hey. These are some details you can now see!';
        app.buttonCaption = 'Hide details';
    } else {
        app.details = '';
        app.buttonCaption = 'Show details';
    }

    renderApp();
};

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={showDetails}>{app.buttonCaption}</button>
            <p>{app.details}</p>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderApp();