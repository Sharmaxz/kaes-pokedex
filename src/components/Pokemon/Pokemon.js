
function Pokemon({background, image, number, type, type1, type2}){
var type= [type1, type2]
var type1= 'Grama'
var type2= 'Veneno'
    return (
        <div style ={{backgroundColor: background}}>
            <img src={image} alt=""/>
            <p>{number}</p>
            <p>{type}</p>
            <div id='cor'><p>{type1}</p></div><p>{type2}</p>
            
        </div>
    )
}

export default Pokemon