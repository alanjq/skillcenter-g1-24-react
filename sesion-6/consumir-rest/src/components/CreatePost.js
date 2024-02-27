export default function CreatePost() {
    const URL_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'

    // BODY
    const body = {
        title: 'Saludos de POST',
        body: 'Ejemplo de post usando API',
        userId: 1
    }

    const handleSubmit = () => {
        fetch(URL_ENDPOINT, {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Saludos desde REST",
                body: "Contenido del POST",
                userId: 1
            }),
        })
            .then((response) => response.json())
            .then(resultado => resultado)
            .catch((error) => error)
    }

    return <div>
        <button type="button" onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2">Crear Post</button>
    </div>
}