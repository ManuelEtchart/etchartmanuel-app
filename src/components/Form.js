import './componentsCSS/Form.css'

const Form = ({comprar,stlValidacion1,stlValidacion2,stlValidacion3}) => {
    return(
        <div>
            <p>Formulario de Compra</p>
            <form className="stlFormulario">
                <label>Nombre</label>
                <input type='text' placeholder="Nombre" name="nombre" id="nombre"/>
                <p style={stlValidacion1}>El campo nombre es obligatorio</p>
                <label>Teléfono</label>
                <input type='tel' placeholder="11-12345678" name="tel"  id="tel"/>
                <p style={stlValidacion2}>El campo teléfono es obligatorio</p>
                <label>E-mail</label>
                <input type='email' placeholder="email@ejemplo.com" name="email" id="email"/>
                <p style={stlValidacion3}>El campo E-mail es obligatorio</p>
                <button className="stlButton" onClick={(e)=>comprar(e)}>Comprar</button>
            </form>
        </div>
    )
}

export default Form