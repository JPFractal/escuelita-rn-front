import "./loader.css"

export default function Loader({
    text = "Cargando..."
}: {
    text?: string
}) {
    return <div className="flex flex-col justify-center items-center">
        <span className="loader mb-5"></span>
        <b>{text}</b>
    </div>
}