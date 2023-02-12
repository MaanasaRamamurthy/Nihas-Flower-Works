const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
        <div class="logo">
            <img src="images/logo.jpg" class="brand-logo" alt="">
            <div class="heading">
            <h1> Nihas Flower Works </h1>
            </div>
        </div>
        
           
         <div class="menubar">   
            <ul class="links-container">
                <li class="link-item"><a href="index.html" class="link">Home</a></li>
                <li class="link-item"><a href="about.html" class="link">About</a></li>
                <li class="link-item"><a href="services.html" class="link">Service</a></li>
                <li class="link-item"><a href="shop.html" class="link">Shop</a></li>
                <li class="link-item"><a href="contact.html" class="link">Contact</a></li>
            </ul>
        </div>
        <div class="cart">
            <a href="cart.html">
                <i class="fa fa-shopping-cart " style="font-size:30px"><span style="font-size:20px; color: "black">0</span></i>
            </a>
        </div>
        
    </div>    
    
        
    `;
}


function onLoadCartNumbers() {
    let productnumbers = localStorage.getItem('cartNumbers');

    if( productnumbers ) {
        document.querySelector('.cart span').textContent = productnumbers;
    }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-72px";
  }
  prevScrollpos = currentScrollPos;
}

createNav();
onLoadCartNumbers();