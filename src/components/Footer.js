import "../css/footer.css"

export function Footer({src, title, showtime}) {
    return (
        <footer>
            <div className="thumb" >
                <img src={src} alt={title} />
            </div>
            <div>
                <p>{title}</p>
                <p>{showtime}</p>
            </div>
        </footer>
    );
}