import "../../../css/information.css";

export function Information(props) {
    const {
        head,
        description
    } = props.info;

    return (
        <div className="info">
            <h1>{head}</h1>
            {description.map((text, i) => <p key={i}>{text}</p>)}
        </div>
    );
}