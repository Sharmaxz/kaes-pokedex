import logo from "../../logo.svg";
import MyButton from "../../components/MyButton/MyButton";
import Pokemon from "../../components/MyButton/Pokemon"
    <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
    </head>
    function HomePage() {
        return (
            <div>
                <header>
                    <p>Pokedex</p>

                    <div id="box">
                        
                        <div className="lupa-buscar">
                            <i class="bi bi-search"></i>
                        </div>


                        <div className="input-buscar">
                            <input type="text" name="poke" id="poke" placeholder="Buscar Pokemon" />

                        </div>
                            <i class="bi bi-x-circle"></i>
                        <div className="btn-fechar"></div>

                    </div>
                </header>

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