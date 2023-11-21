
class MyHeader extends HTMLElement{
    ConnectedCallback(){
        this.innerHTML = `
        <p>
        <header class="header">
            <div class="social">
                <div class="social-icons">
                    <a href=""><i class="fab fa-facebook"></i></a>
                    <a href=""><i class="fab fa-youtube"></i></a>
                    <a href=""><i class="fab fa-twitter"></i></a>
                    <a href=""><i class="fab fa-instagram"></i></a>
                    <a href=""><i class="fab fa-linkedin"></i></a>
                    <a href=""><i class="fab fa-github"></i></a>
                </div>
            <!-- <hr>  Para agregar linea divisoria-->

                <nav class = "nav-main">
                    <input type="checkbox" id="check">
                    <label for="check" class="checkbtn">
                        <i class="fas fa-bars"></i>
                    </label>
                    <ul class = "nav-menu-right">
                        <!-- Probar insertar el boton en esta etiqueta-->
                        <li class = "menu__item">
                            <a class = "menu__link" href="index.html">Inicio</a>
                            <a class = "menu__link" href="perfil.html">Perfil</a>
                            <a class = "menu__link" href="logros.html">Logros</a>
                            <a class = "menu__link" href="contacto.html">Contacto</a>
                        </li>
                    </ul>
                
                </nav>
            </div>

            <nav class="nav-home">
                <nav class="home_icon">
                    <div class="logo-inicio">
                        <a href="index.html">
                        <img src="img/HomeSitio.JPG " width="300" height="60" alt="Logo-inicio"> 
                        </a>
                        
                    </div>
                    <div class="searchnav">
                        <input class="barrabusqueda" type="text" placeholder="Buscar...">
                    </div>
                </nav>
            </nav>
            
        </header>
        </p>

        `       
    }
}


class MyFooter extends HTMLElement{
    ConnectedCallback(){
        this.innerHTML = `
            <p><a href="mailto:hege@example.com">oscaly@example.com</a></p>
        `
    }
        
}

customElements.define( 'My-Header', MyHeader )
customElements.define( 'My-Footer', MyFooter )