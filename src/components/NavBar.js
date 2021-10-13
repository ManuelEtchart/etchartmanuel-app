function NavBar () {

    const li = {listStyle: "none",
                display: "inline-block"}

    const a = {fontFamily: "'Arial', 'Helvetica'",
	            fontSize: "25px",
	            fontWeight: 600,
	            textDecoration: "none",
	            color: "#e71d36",
	            marginRight: "100px"}

    return(
        <ul>
			<li style={li}><a style={a} href="index.html">Inicio</a></li>
			<li style={li}><a style={a} href="productos.html">Productos</a></li>
			<li style={li}><a style={a} href="promociones.html">Promos</a></li>
			<li style={li}><a style={a} href="nosotros.html">Nosotros</a></li>
			<li style={li}><a style={a} href="contacto.html">Contacto</a></li>			    
		</ul>
    )
}

export default NavBar