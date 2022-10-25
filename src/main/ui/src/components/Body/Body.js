import Search from "../Search/Search";
import CardListContainer from "../CardListContainer/CardListContainer";
import CardCategoryContainer from "../CardCategoryContainer/CardCategoryContainer";
import './Body.scss';



const Body = () => {
    return(
        <main>
            <Search/>
            <CardCategoryContainer/>
            <CardListContainer/>
        </main>
    )
}

export default Body;