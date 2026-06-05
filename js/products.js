/**
 * products.js
 * Catálogo base de la tienda.
 *
 * Estos datos se utilizan únicamente cuando localStorage
 * aún no tiene información registrada.
 *
 * Una vez el administrador agrega o modifica productos,
 * los datos almacenados tienen prioridad.
 */

/**
 * Categorías principales del catálogo.
 * La categoría "all" se usa únicamente para filtros.
 */
export const categories = [
  {
    id: "all",
    name: "Todos",
  },
  {
    id: "outerwear",
    name: "Chaquetas",
  },
  {
    id: "accessories",
    name: "Accesorios",
  },
  {
    id: "bottoms",
    name: "Pantalones",
  },
  {
    id: "footwear",
    name: "Calzado",
  },
];

/**
 * Productos iniciales del e-commerce.
 */
export const products = [
  {
    id: "nx-jacket-01",
    name: "NovaTech Jacket",
    category: "outerwear",
    price: 149,
    description:
      "Chaqueta urbana con diseño futurista, acabados premium y estética tecnológica moderna.",
    image: "images/chaqueta.png",
    stock: 12,
    destacado: true,
  },

  {
    id: "nx-glasses-01",
    name: "Cyber Vision Glasses",
    category: "accessories",
    price: 79,
    description:
      "Gafas con inspiración cyberpunk que combinan estilo moderno y personalidad urbana.",
    image: "images/gafas.png",
    stock: 25,
    destacado: true,
  },

  {
    id: "nx-pants-01",
    name: "Quantum Cargo Pants",
    category: "bottoms",
    price: 109,
    description:
      "Pantalón de corte contemporáneo con detalles minimalistas y máxima comodidad.",
    image: "images/pantalon.png",
    stock: 18,
    destacado: false,
  },

  {
    id: "nx-shoes-01",
    name: "Velocity Sneakers",
    category: "footwear",
    price: 129,
    description:
      "Zapatillas de diseño innovador con líneas futuristas y excelente rendimiento urbano.",
    image: "images/zapatos.png",
    stock: 20,
    destacado: true,
  },
];
