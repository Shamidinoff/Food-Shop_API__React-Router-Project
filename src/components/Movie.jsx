import { useParams } from "react-router-dom"

function Movie() {
    const value = useParams();
    console.log(value);
    return <h1>HSome movie</h1>
}

export { Movie }