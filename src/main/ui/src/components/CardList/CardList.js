import './CardList.scss';
import data from "../../helpers/alojamientos.json";


const CardList = () => { 

  

    return(
        <cardList>        

            <ul>
                {
                    data.map((item, index) => 
                                            
                        <div key={index} className="conteiner">
                            <div className="card">
                                <div className="card-logo" >
                                    <img src={item.img} width="100%" />
                                </div>
                                <div className="card-content">
                                    <h4>{item.category}</h4>
                                    <p>{item.location}</p>
                                    <h1>{item.title}</h1>  
                                    <p>{item.description}</p>
                                    <button>Ver más</button>
                                </div>
                            </div>
                        </div>
                        
                        
                    )
                }
            </ul> 
            
        </cardList>  
    )
}

export default CardList;