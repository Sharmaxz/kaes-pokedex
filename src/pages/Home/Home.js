import logo from "../../logo.svg";
import MyButton from "../../components/MyButton/MyButton";
import Pokemon from "../../components/MyButton/Pokemon"
function HomePage() {

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <MyButton background={'#000000'}/>
            <MyButton background={'#ff0000'}/>
            <MyButton background={'#003dff'}/>
           <div>
               <Pokemon background={'#D9D9D9'}number={'N0001'} image={''}/>
           </div>
        </div>
    )
}

export default HomePage