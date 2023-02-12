const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-main">  
            <div class="footer-content">  
                <div class="content">
                    <div class="heading">
                        <h1>Nihas Flower Works</h1>     
                        <p class="footer-links">
                            <a href="index.html" class="link-1">Home</a>
                            
                            <a href="about.html">About</a>
                        
                            <a href="services.html">Service</a>
                        
                            <a href="shop.html">Shop</a>
                            
                            <a href="contact.html">Contact</a>
                        </p>       
                    </div>

                   
                    
                    <div class="contact">

                        <div>
                            <i class="fa fa-phone"></i>
                            <p style="font-weight:bold">8870014385 / 9655111290</p>
                        </div>

                        <div>
                            <i class="fa fa-envelope"></i>
                            <p><a href="mailto:nihasflowerwork@gmail.com">nihasflowerwork@gmail.com</a></p>
                        </div>
                            
                    </div>

                    <div class="footer-social-container">
                        <a href="https://www.facebook.com/Nihas-Flower-Works-270017293639192/" class="fa fa-facebook"></a>
                        <a href="https://www.instagram.com/nihas.anu/?hl=en" class="fa fa-instagram"></a>   
                    </div>
                </div>
                
                <p class="footer-credit"> Best Online Store for Flowers</p>
            </div>
            
    </div>
        
       
    `;
}

createFooter();