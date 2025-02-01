import MyButton from "../../examples/components/MyButton/MyButton";
import Pokemon from "../../components/Pokemon/Pokemon"
import {useState} from "react";

function HomePage() {
    const [list, ] = useState(['#000000', '#ff0000', '#d6b0b7'])

    const pokemonListRender = () => {
        return (
            <>
                {list.map((item, index) => (
                    <>
                        <MyButton background={item}/>
                        {index}
                    </>
                ))}
            </>
        )
    }

    return (
        <div>
            {list.map((item, index) => (
                <>
                    <MyButton background={item}/>
                    {index}
                </>
            ))}

            <main>
                <div>
                    Busca
                </div>
                <div id="pokemon">
                    <Pokemon background={'#807d2c'} number={'N0001'} image={'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png'} type={""}/>
                    <Pokemon background={'#f30000'} number={'N0002'} image={''}/>
                    <Pokemon background={'#9ab3e8'} number={'N0003'} image={''}/>
                    {pokemonListRender()}
                </div>
            </main>
        </div>
    )
}

export default HomePage
