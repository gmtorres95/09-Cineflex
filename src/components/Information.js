import "../css/information.css";

export function Information(props) {
    const {
        title,
        info
    } = props.data;
    return (
        <div className="info">
            <h1>{title}</h1>
            {info.map((e, i) => <p key={i}>{e}</p>)}
        </div>
    );
}