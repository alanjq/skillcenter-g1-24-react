export default function PatchPost() {
    const URL = 'https://jsonplaceholder.typicode.com/posts/1'

    const handlePatch = () => {
        fetch(URL, {
            method: 'patch',
            headers: {
                "Content-Type": "application/json",
                'charset': 'UTF-8'
            },
            body: JSON.stringify({
                title: 'Buenas noches. Método Patch'
            })
        })
            .then((response) => response.json())
            .then((json) => json)
            .catch((error) => error)
    }


    return <div className="pt-3">
        <button type="button" onClick={handlePatch} className="bg-green-600 text-white px-4 py-2">Actualizar Post</button>
    </div>
}