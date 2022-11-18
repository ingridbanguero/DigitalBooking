import "./ReservaForm.scss";

const ReservaForm = () => {
    return(
        <div className="reserva-form">
            <div className="reserva-content">
            <h2>Completá tus datos</h2>
                <form>
                    <div>
                        <label className="text2">Nombre</label>   
                        <input className="text2" type="text" name="name" autoComplete="off" value="Bruno" disabled/>
                    </div>
                    <div>
                        <label className="text2">Apellido</label>   
                        <input className="text2" type="text" name="name" autoComplete="off" value="Rodriguez" disabled/>
                    </div>
                    <div>
                        <label className="text2">Correo electrónico</label>   
                        <input className="text2" type="email" name="name" autoComplete="off" value="brodriguez@gmail.com" disabled/>
                    </div>
                    <div>
                        <label className="text2">Ciudad</label>   
                        <input className="text2" type="text" name="name" autoComplete="off"/>
                    </div>
                </form>
            </div>
        </div> 
    )
}

export default ReservaForm;