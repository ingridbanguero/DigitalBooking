import "./Administracion.scss";
import Body from "../../components/Body/Body";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductTitle from "../../components/ProductTitle/ProductTitle";
import AdminForm from "../../components/AdminForm/AdminForm";
import AdminAttributes from "../../components/AdminAttributes/AdminAttributes";
import AdminPolicies from "../../components/AdminPolicies/AdminPolicies";
import AdminImages from "../../components/AdminImages/AdminImages";


const ReservaExitosa = () => {
    return(
        <section className="administracion">
            <Navbar/>
                <Body>
                    <ProductTitle nombre="Administración" categoria="admin"/>
                    <section className="container">
                        <h1>Crear propiedad</h1>
                        <form>
                            <AdminForm/>
                            <AdminAttributes/>
                            <AdminPolicies/>
                            <AdminImages/>
                            <div className="create">
                                <button>Crear</button>
                            </div>
                        </form>
                    </section>
                </Body>
            <Footer/>
        </section> 
    )
}


export default ReservaExitosa;