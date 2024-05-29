import "./ServiceInfoStyles.css"


// This Is a Dynamic Component Used In "ServiceInfo.js"
function ServiceInfoData(props) {
    return(
        <div className="s-card">
            <div className="s-image">
            <img src={props.image} alt="image"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <a href={props.link}>{props.linktext}</a>
        </div>
    );
}

export default ServiceInfoData;