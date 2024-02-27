export default function CreatePost() {
    const URL_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts?userId=1'


    const handleSubmit = () => {
        fetch(URL_ENDPOINT, {
            method: 'delete'
        })
            .then((response) => response.json())
            .then(resultado => resultado)
            .catch((error) => error)
    }

    return <div>
        <button type="button" onClick={handleSubmit} className="bg-red-600 text-white px-4 py-2">DELETE Post</button>
    </div>
}