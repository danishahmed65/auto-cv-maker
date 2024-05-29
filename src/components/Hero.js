import "./HeroStyles.css"

function Hero(props) {
    return(
        <>
        {/* This is a DYNAMIC Component, We can Control it from different Pages */}
        {/* By Using PROPS all the elemnts are made Dynamic Changable and editable */}
        <div className={props.cName}>
            <img alt = "heroImg" src = {props.heroImg}  />
        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
            <a href={props.url} className={props.btnClass}>
            {props.buttonText}
            </a>
        </div>
        </>   
    )
}

export default Hero;