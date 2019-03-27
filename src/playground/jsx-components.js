console.log('app.js is running!');

//JSX being compiled into Babel ES5

const obj = {
    title: 'Indecision title',
    subtitle: 'Leage of Legends',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        obj.options.push(option);
        e.target.elements.option.value = '';
    }
    onSubmit();
};

const removeOptions = () => {
    obj.options=[];
    onSubmit();
};

const randomPicker = () => {
    const randomNumber = Math.floor(Math.random() * obj.options.length);
    const option = obj.options[randomNumber];
    console.log(option);
};

const onSubmit = () => {
    const template = (
        <div>
            <h1>{obj.title}</h1>
            {obj.subtitle && <p>{obj.subtitle}</p>}
            {obj.options.length > 0 ? 'Here are your options' : 'no options'}
            <p>{obj.options.length}</p>
            <button disabled={obj.options.length===0} onClick={randomPicker}>What should I choose?</button>
            <button onClick={removeOptions}>Remove Options</button>
            <ol>
                {obj.options.map((option) => {
                    return <li key={option}>{option}</li>
                })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, ele);
};

const ele = document.getElementById('testID');

onSubmit();