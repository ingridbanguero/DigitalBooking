import "./Administracion.scss";
import Body from "../../components/Body/Body";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductTitle from "../../components/ProductTitle/ProductTitle";
import AdminForm from "../../components/AdminForm/AdminForm";
import AdminAttributes from "../../components/AdminAttributes/AdminAttributes";
import AdminPolicies from "../../components/AdminPolicies/AdminPolicies";
import AdminImages from "../../components/AdminImages/AdminImages";
import { useState } from "react";


const Administracion = () => {
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [ciudad, setCiudad] = useState(null);
    const [categoria, setCategoria] = useState(null);
    const [descripcion, setDescripcion] = useState("");
    const [atributos, setAtributos] = useState([]);
    const [normas, setNormas] = useState("");
    const [saludSeguridad, setSaludSeguridad] = useState("");
    const [cancelacion, setCancelacion] = useState("");
    const [imagenes, setImagenes] = useState([]);

    const createProduct = (e) => {
        e.preventDefault();
        console.log(nombre);
        console.log(categoria);
        console.log(ciudad);
        console.log(direccion);
        console.log(descripcion);
        console.log(atributos);
        console.log(normas);
        console.log(saludSeguridad);
        console.log(cancelacion);
        console.log(imagenes);
    }

    return(
        <section className="administracion">
            <Navbar/>
                <Body>
                    <ProductTitle nombre="Administración" categoria="admin"/>
                    <section className="container">
                        <h1>Crear propiedad</h1>
                        <form>
                            <AdminForm 
                                onSelectNombre={nombre => setNombre(nombre)} 
                                onSelectCiudad={ciudad => setCiudad(ciudad)}
                                onSelectDireccion={direccion => setDireccion(direccion)}
                                onSelectCategoria={categoria => setCategoria(categoria)}
                                onSelectDescripcion={descripcion => setDescripcion(descripcion)}
                            />
                            <AdminAttributes
                                onSelectAtributos={atributos => setAtributos(atributos)}
                            />
                            <AdminPolicies
                                onSelectNormas={normas => setNormas(normas)}
                                onSelectSaludSeguridad={saludSeguridad => setSaludSeguridad(saludSeguridad)}
                                onSelectCancelacion={cancelacion => setCancelacion(cancelacion)}
                            />
                            <AdminImages
                                onSelectImagenes={imagenes => setImagenes(imagenes)}
                            />
                            <div className="create">
                                <button onClick={createProduct}>Crear</button>
                            </div>
                        </form>
                    </section>
                </Body>
            <Footer/>
        </section> 
    )
}


export default Administracion;