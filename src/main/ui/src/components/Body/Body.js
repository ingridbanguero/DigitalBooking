import Search from "../Search/Search";
import CardListContainer from "../CardListContainer/CardListContainer";
import './Body.scss';



const Body = () => {
    return(
        <main>
            <Search/>
            <CardListContainer/>
        </main>
    )
}

export default Body;