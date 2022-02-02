import style from './stye.module.css'

function Card(props) {
    const {image, name, species, status} = props  //destructuring
    return(
        <div className={style.card}>
            <img src={image} alt=""/>   {/* arriba se hace destructuring para aca no poner props.image */}
            <h1>{name}</h1>
            <h2>{species} - {status}</h2>
        </div>
    );
}
export {Card}