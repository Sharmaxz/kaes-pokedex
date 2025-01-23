import './App.css';
import HomePage from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <link rel="stylesheet"
                  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
            <header>
                <Navbar/>
            </header>
            <div className="App-header">
                <HomePage/>
            </div>
            <footer>

            </footer>
        </div>
    );
}

export default App;

