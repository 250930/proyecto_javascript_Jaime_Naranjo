// stylehub-navbar.js
// Componente principal de navegación para STYLEHUB.
// Gestiona navegación global y contador dinámico del carrito.
const navigationTemplate = document.createElement("template");

navigationTemplate.innerHTML = `
<style>

:host{
  position:sticky;
  top:0;
  z-index:999;
  display:block;

  background:rgba(5,8,22,.85);

  backdrop-filter:blur(18px);

  border-bottom:
    1px solid rgba(0,229,255,.12);
}

/* ==========================
   CONTENEDOR
========================== */

.navigation-wrapper{

  width:min(1400px,calc(100% - 40px));

  margin:auto;

  height:80px;

  display:flex;

  align-items:center;

  justify-content:space-between;
}

/* ==========================
   LOGO
========================== */

.brand-area{

  display:flex;

  align-items:center;

  gap:.8rem;
}

.brand-logo{

  width:42px;
  height:42px;

  object-fit:contain;
}

.brand-name{

  font-family:"Orbitron",sans-serif;

  color:#00E5FF;

  font-size:1rem;

  letter-spacing:.25rem;

  font-weight:700;
}

/* ==========================
   MENÚ
========================== */

.navigation-links{

  display:flex;

  align-items:center;

  gap:1.4rem;
}

.navigation-link{

  color:#CBD5E1;

  font-size:.95rem;

  font-weight:500;

  transition:.3s ease;

  position:relative;
}

.navigation-link:hover{

  color:#00E5FF;
}

.navigation-link::after{

  content:"";

  position:absolute;

  bottom:-6px;
  left:0;

  width:0%;

  height:2px;

  background:#00E5FF;

  transition:.3s ease;
}

.navigation-link:hover::after{

  width:100%;
}

/* ==========================
   CARRITO
========================== */

.shopping-button{

  display:flex;

  align-items:center;

  gap:.8rem;

  padding:.8rem 1rem;

  border:none;

  border-radius:14px;

  background:
    rgba(255,255,255,.04);

  color:white;

  cursor:pointer;

  transition:.3s ease;

  border:
    1px solid rgba(255,255,255,.08);
}

.shopping-button:hover{

  border-color:
    rgba(0,229,255,.3);

  box-shadow:
    0 0 20px rgba(0,229,255,.15);
}

.cart-indicator{

  min-width:30px;

  height:30px;

  display:flex;

  align-items:center;

  justify-content:center;

  border-radius:50%;

  background:
    linear-gradient(
      135deg,
      #00E5FF,
      #7C3AED
    );

  color:white;

  font-size:.85rem;

  font-weight:700;
}

/* ==========================
   RESPONSIVE
========================== */

@media(max-width:768px){

  .navigation-wrapper{

    flex-direction:column;

    height:auto;

    padding:1rem 0;
  }

  .navigation-links{

    flex-wrap:wrap;

    justify-content:center;

    margin:1rem 0;
  }
}

</style>

<div class="navigation-wrapper">

  <div class="brand-area">

    <img
      src="images/logo.png"
      alt="STYLEHUB"
      class="brand-logo"
    >

    <span class="brand-name">
      STYLEHUB
    </span>

  </div>

  <nav class="navigation-links">

    <a
      href="index.html"
      class="navigation-link"
    >
      Inicio
    </a>

    <a
      href="#catalogSection"
      class="navigation-link"
    >
      Catálogo
    </a>

    <a
      href="history.html"
      class="navigation-link"
    >
      Pedidos
    </a>

    <a
      href="dashboard.html"
      class="navigation-link"
    >
      Admin 
    </a>

  </nav>

  <button
    class="shopping-button"
    type="button"
  >

    🛒

    <span class="cart-indicator">
      0
    </span>

  </button>

</div>
`;

class StyleHubNavigation extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: "open",
    });

    this.shadowRoot.appendChild(navigationTemplate.content.cloneNode(true));

    this.cartBadge = this.shadowRoot.querySelector(".cart-indicator");
  }

  connectedCallback() {
    window.addEventListener("cartCountUpdate", this.refreshCartCounter);

    this.shadowRoot
      .querySelector(".shopping-button")
      .addEventListener("click", this.redirectToCart);
  }

  disconnectedCallback() {
    window.removeEventListener("cartCountUpdate", this.refreshCartCounter);
  }

  redirectToCart = () => {
    window.location.href = "cart.html";
  };

  refreshCartCounter = (event) => {
    this.cartBadge.textContent = event.detail;
  };
}

customElements.define("premium-navbar", StyleHubNavigation);
