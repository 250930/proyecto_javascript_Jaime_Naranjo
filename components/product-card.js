// cyber-product-card.js
// Componente reutilizable para mostrar productos con estética futurista.

class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._product = null;
  }

  set product(value) {
    this._product = value;
    this.render();
  }

  get product() {
    return this._product;
  }

  render() {
    if (!this._product) return;

    const imageMarkup = this._product.image
      ? `<img class="product-img" src="${this._product.image}" alt="${this._product.name}">`
      : `<div class="product-placeholder">SIN IMAGEN</div>`;

    this.shadowRoot.innerHTML = `
      <style>

        :host{
          display:block;
          position:relative;
          overflow:hidden;
          border-radius:24px;

          background:
            linear-gradient(
              180deg,
              rgba(10,15,35,.98),
              rgba(5,8,20,.98)
            );

          border:
            1px solid rgba(0,229,255,.12);

          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        :host:hover{
          transform:translateY(-8px);

          border-color:
            rgba(0,229,255,.35);

          box-shadow:
            0 0 30px rgba(0,229,255,.15),
            0 0 60px rgba(124,58,237,.12);
        }

        .product-panel{
          display:grid;
          gap:1rem;
          padding:1.25rem;
        }

        .product-img{
          width:100%;
          aspect-ratio:1/1;
          object-fit:cover;

          border-radius:18px;

          background:#0f172a;

          border:
            1px solid rgba(255,255,255,.08);
        }

        .product-placeholder{
          width:100%;
          aspect-ratio:1/1;

          display:flex;
          align-items:center;
          justify-content:center;

          border-radius:18px;

          color:#94A3B8;

          background:#0f172a;

          border:
            1px dashed rgba(255,255,255,.15);
        }

        .item-info{
          display:grid;
          gap:.5rem;
        }

        .item-name{
          margin:0;

          color:#F8FAFC;

          font-size:1.15rem;

          font-weight:700;
        }

        .item-price{
          margin:0;

          color:#00FFB3;

          font-size:1.35rem;

          font-weight:800;
        }

        .item-description{
          margin:0;

          color:#94A3B8;

          line-height:1.7;

          min-height:70px;
        }

        .actions{
          display:grid;
          gap:.8rem;
        }

        .action-top{
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:.75rem;
        }

        .category-chip{
          display:inline-flex;
          align-items:center;

          padding:.45rem .85rem;

          border-radius:999px;

          background:
            rgba(0,229,255,.08);

          border:
            1px solid rgba(0,229,255,.2);

          color:#00FFB3;

          font-size:.72rem;

          font-weight:700;

          letter-spacing:.08em;

          text-transform:uppercase;
        }

        .preview-button{
          display:inline-flex;
          align-items:center;
          justify-content:center;

          padding:.7rem 1rem;

          border-radius:12px;

          text-decoration:none;

          border:
            1px solid rgba(124,58,237,.25);

          color:#8B5CF6;

          font-weight:700;

          transition:.3s;
        }

        .preview-button:hover{
          background:
            rgba(124,58,237,.08);

          transform:translateY(-2px);
        }

        .buy-button{
          width:100%;

          border:none;

          border-radius:14px;

          padding:.95rem;

          cursor:pointer;

          color:white;

          font-size:.95rem;

          font-weight:700;

          background:
            linear-gradient(
              90deg,
              #22D3EE,
              #7C3AED
            );

          transition:.3s;
        }

        .buy-button:hover{
          transform:translateY(-2px);

          box-shadow:
            0 0 25px rgba(34,211,238,.25);
        }

      </style>

      <div class="product-panel">

        ${imageMarkup}

        <div class="item-info">

          <p class="item-name">
            ${this._product.name}
          </p>

          <p class="item-price">
            $${this._product.price}
          </p>

        </div>

        <p class="item-description">
          ${this._product.description}
        </p>

        <div class="actions">

          <div class="action-top">

            <span class="category-chip">
              ${this._product.category}
            </span>

            <a
              class="preview-button"
              href="product.html?id=${this._product.id}"
            >
              Ver detalle
            </a>

          </div>

          <button
            class="buy-button"
            type="button"
          >
            Agregar al carrito
          </button>

        </div>

      </div>
    `;

    this.shadowRoot
      .querySelector(".buy-button")
      .addEventListener("click", () => {
        this.dispatchEvent(
          new CustomEvent("add-to-cart", {
            bubbles: true,
            composed: true,
          }),
        );
      });
  }
}

customElements.define("product-card", ProductCard);
