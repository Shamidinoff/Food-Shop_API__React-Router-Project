import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";

function Recipe(props) {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getMealById(id.then())
    })

    return <>

    </>
}

export { Recipe }