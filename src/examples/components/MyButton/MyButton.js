import {useState} from "react";
import './style.css';

function MyButton({background}) {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("Clicado")

    function handleClick() {
        setCount(count + 1)
        console.log(background)
    }

    return (
            <button
                onClick={handleClick}
                style={{backgroundColor: background}}
            >
                {text} {count} vezes
            </button>
    )
}

export default MyButton