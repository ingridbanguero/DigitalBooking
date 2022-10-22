import './Search.scss';

const Search = () => {
    return(
        <div className="search">
            <h1>Busca ofertas en hoteles, casas y mucho más</h1>
            <form>
                <div className="location">
                    <select>
                        <option selected disabled>¿A dónde vamos?</option>
                    </select>
                </div>
                <div className="calendar">
                    <input type="text" placeholder="Check-in - Check out"/>
                </div>
                <button className="button1">Buscar</button>
            </form>
        </div>
    )
}

export default Search;