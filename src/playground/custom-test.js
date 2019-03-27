const ele = document.getElementById('testID');

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    customTest();
};

const customTest = () => {
    const template = (
        <div>
            <h1>Toggle Button</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
            {visibility && (
                <div>
                    <p>This will POP up</p>
                </div>
            )}
        </div>
    )
    ReactDOM.render(template, ele);
}

customTest();