import { Link } from "react-router-dom";

function CategoryItem(props) {
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = props;

    return <div class="card">
        <div class="card-image">
            <img src={strCategoryThumb} alt={strCategory} />
            <span class="card-title">{strCategory}</span>
        </div>
        <div class="card-content">
            <p>{strCategoryDescription}</p>
        </div>
        <div className="card-action">
            <Link to={`/category/${idCategory}`} className="btn">Watch category</Link>
        </div>
    </div>
}

export { CategoryItem }