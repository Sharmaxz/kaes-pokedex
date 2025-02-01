import MyButton from "../../components/MyButton/MyButton";
import Pokemon from "../../components/Pokemon/Pokemon"

function HomePage() {
    return (
        <div>
            {/* <MyButton background={'#000000'}/>
            <MyButton background={'#ff0000'}/>
            <MyButton background={'#003dff'}/> */}
            <main> 
                <div>
                    Busca
                </div>
                <div id="pokemon">
                    <Pokemon background={'#807d2c'} number={'N0001'} image={'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png'} type={""}/>
                    <Pokemon background={'#f30000'} number={'N0002'} image={''}/>
                    <Pokemon background={'#9ab3e8'} number={'N0003'} image={''}/>
                </div>
            </main>
        </div>
    )
}

export default HomePage