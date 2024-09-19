import { Fragment, useState } from "react";


const Greeting = () => {
    const [changedText, setChangedText] = useState(false);

    const changedHandler = () => {
        setChangedText(true)
    }

    return (
        <Fragment>
            <div>Hello World!</div>
            {!changedText && <p>It's good to see you again</p>}
            {changedText && <p>Text Changed</p>}
            <button onClick={changedHandler}>Click to changed text</button>
        </Fragment>
        
    )
};

export default Greeting;