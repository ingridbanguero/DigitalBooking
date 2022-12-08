import "./Administracion.scss";
import { useState, useContext } from "react";
import Body from "../../components/Body/Body";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductTitle from "../../components/ProductTitle/ProductTitle";
import AdminForm from "../../components/AdminForm/AdminForm";
import AdminAttributes from "../../components/AdminAttributes/AdminAttributes";
import AdminPolicies from "../../components/AdminPolicies/AdminPolicies";
import AdminImages from "../../components/AdminImages/AdminImages";
import baseUrl from "../../helpers/api";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2';


const Administracion = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

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

    // Errores
    const [errorImagenes, setErrorImagenes] = useState("");
    const [errorPoliticas, setErrorPoliticas] = useState("");
    const [errorAtributos, setErrorAtributos] = useState("");
    const [errorInfo, setErrorInfo] = useState("");


    const createProduct = (e) => {
        e.preventDefault();
        const misImagenes = validarImagenes();
        const misPoliticas = validarPoliticas();
        const misAtributos = validarAtributos();
        const misInfo = validarInfo();

        // Enviar datos
        if(user.auth){
            const producto = {
                nombre: nombre,
                descripcion: descripcion,
                caracteristicas: atributos,
                politica: {
                    normas: normas,
                    cancelacion: cancelacion,
                    "salud-seguridad": saludSeguridad,
                },
                categoria: {
                    id: categoria
                }, 
                ciudad: {
                    id: ciudad
                },
                imagenes: imagenes
            }
            
            if(misImagenes && misPoliticas && misAtributos && misInfo){
                fetch(`${baseUrl}/productos`, {
                    method: "POST",
                    body: JSON.stringify(producto),
                    headers: {
                        'Content-Type' : 'application/json',
                        'Authorization': `Bearer ${user.token}`
                    }
                })
                .then(response => {
                    if (!response.ok) {
                        Swal.fire({
                            title: 'Error',
                            text: 'No ha sido posible crear el producto',
                            icon: 'error',
                            confirmButtonText: 'OK',
                            confirmButtonColor: '#F0572D',
                        })
                        throw new Error("HTTP status " + response.status);
                    }
                    return response.json();
                })
                .then(data => {
                    navigate("/producto-exitoso");
                })
            }
        }
    }

    const validarInfo = () => {
        if(nombre && direccion && ciudad && categoria && descripcion){
            setErrorInfo("");
            return true;
        }else {
            setErrorInfo("Debe diligenciar todos los campos");
            return false;
        }
    }

    const validarAtributos = () => {
        if(atributos.length > 0){
            setErrorAtributos("");
            return true;
        }else{
            setErrorAtributos("Debe seleccionar por lo menos 1 atributo");
            return false;
        }
    }

    const validarPoliticas = () => {
        if(normas && saludSeguridad && cancelacion){
            setErrorPoliticas("");
            return true;
        }else {
            setErrorPoliticas("Estos campos son obligatorios");
            return false;
        }
    }

    const validarImagenes = () => {
        if(imagenes.length <= 0){
            setErrorImagenes("Este campo es obligatorio");
            return false;
        }else if(imagenes.length < 5){
            setErrorImagenes("Debe ingresar minimo 5 imagenes");
            return false;
        }else{
            setErrorImagenes("");
            return true;
        }
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
                                errorInfo={errorInfo}
                            />
                            <AdminAttributes
                                onSelectAtributos={atributos => {
                                    let atributosHelper = [];
                                    atributos.forEach(atributo => atributosHelper.push({id: atributo}))
                                    setAtributos(atributosHelper);
                                }}
                                errorAtributos={errorAtributos}
                            />
                            <AdminPolicies
                                onSelectNormas={normas => setNormas(normas)}
                                onSelectSaludSeguridad={saludSeguridad => setSaludSeguridad(saludSeguridad)}
                                onSelectCancelacion={cancelacion => setCancelacion(cancelacion)}
                                errorPoliticas={errorPoliticas}
                            />
                            <AdminImages
                                onSelectImagenes={imagenes => {
                                    let imagesHelper = [];
                                    imagenes.forEach((imagen, index) => imagesHelper.push({titulo: `ImgPropiedad${index}`, url: imagen}))
                                    setImagenes(imagesHelper);
                                }}
                                errorImagenes={errorImagenes}
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