import "../css/input.css"

export function Input(props) {
    const {
        title,
        placeholder,
        SetInfo
    } = props.imput;

    return (
        <div className="input">
            <p>{title}</p>
            <input placeholder={placeholder} onChange={e => SetInfo(e.target.value)}/>
        </div>
    );
}