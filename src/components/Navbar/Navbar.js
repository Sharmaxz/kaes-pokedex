import './style.css'

const navbar2Style = {
    backgroundColor: 'blue',
}

function Navbar() {
    const navbarStyle = {
        backgroundColor: 'red',
    }

    return(
        <div style={navbarStyle}>
            <p className="paragraph">Pokedex</p>

            <div id="box"  style={navbar2Style}>

                <div className="lupa-buscar">
                    <i className="bi bi-search"></i>
                </div>


                <div className="input-buscar">
                    <input type="text" name="poke" id="poke" placeholder="Buscar Pokemon"/>

                </div>
                <i className="bi bi-x-circle"></i>
                <div className="btn-fechar"></div>

            </div>
        </div>
    )
}

export default Navbar