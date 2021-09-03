import "../css/footer.css"

export function Footer({src, title, day}) {
    return (
        <footer>
            <div className="thumb" >
                <img src={src} alt={title} />
            </div>
            <div>
                <p>{title}</p>
                <p>{day}</p>
            </div>
        </footer>
    );
}