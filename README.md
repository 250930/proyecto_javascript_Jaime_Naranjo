# STYLEHUB 👕🛍️

STYLEHUB es una plataforma de comercio electrónico desarrollada con HTML, CSS y JavaScript Vanilla, enfocada en la venta de prendas de vestir. El proyecto incluye una tienda para usuarios y un panel administrativo completo para la gestión de productos, categorías y pedidos.

---

## 📌 Descripción

STYLEHUB permite a los usuarios navegar por un catálogo de productos, visualizar detalles, agregar artículos al carrito y realizar pedidos. Además, cuenta con un panel administrativo protegido por inicio de sesión para administrar el contenido de la tienda.

Toda la información se almacena utilizando LocalStorage y SessionStorage, simulando el comportamiento de una aplicación real sin necesidad de una base de datos externa.

---

## 🚀 Funcionalidades

### 👤 Usuario

- Visualización de catálogo de productos.
- Búsqueda de productos.
- Filtrado por categorías.
- Ordenamiento por precio y nombre.
- Vista detallada de productos.
- Sistema de carrito de compras.
- Gestión de favoritos.
- Checkout de pedidos.
- Persistencia de datos mediante LocalStorage.
- Diseño responsive.

### 🔐 Administrador

- Inicio de sesión administrativo.
- Dashboard con métricas generales.
- Gestión de categorías (CRUD).
- Gestión de productos (CRUD).
- Visualización de pedidos realizados.
- Exportación de pedidos en formato CSV.
- Modal personalizado para formularios y detalles.
- Control de sesión mediante SessionStorage.

---

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- Web Components
- LocalStorage
- SessionStorage

---

## 📂 Estructura del Proyecto

```text
STYLEHUB/
C:.
│   admin.html
│   cart.html
│   dashboard.html
│   history.html
│   index.html
│   product.html
│   README.md
│   
├───.vscode
│       settings.json
│       
├───components
│       modal-dialog.js
│       navbar.js
│       product-card.js
│       
├───images
│       banner-tienda.jpg
│       chaqueta.png
│       fondo-login.jpg
│       gafas.png
│       logo.png
│       pantalon.png
│       producto-placeholder.jpg
│       zapatos.png
│       
├───js
│       app.js
│       auth.js
│       cart.js
│       categories.js
│       dashboard.js
│       history.js
│       orders-admin.js
│       product-detail.js
│       products-admin.js
│       products.js
│       storage.js
│       ui.js
│       
└───styles
        admin.css
        ecommerce.css
        global.css
        history.css

---

## 📊 Panel Administrativo

El panel administrativo permite administrar completamente la tienda desde una interfaz moderna y centralizada.

### Gestión de Categorías

- Crear categorías.
- Editar categorías.
- Eliminar categorías.

### Gestión de Productos

- Crear productos.
- Editar productos.
- Eliminar productos.
- Administrar imágenes, precios y categorías.

### Gestión de Pedidos

- Consultar pedidos realizados.
- Visualizar información completa del cliente.
- Ver productos comprados.
- Exportar pedidos a formato CSV.

---

## 💾 Almacenamiento Local

El proyecto utiliza LocalStorage para almacenar:

- Productos
- Categorías
- Carrito de compras
- Favoritos
- Pedidos
- Preferencias del usuario

Y SessionStorage para:

- Sesión del administrador

---

## 🎯 Objetivos del Proyecto

Este proyecto fue desarrollado con fines académicos para aplicar conceptos de desarrollo frontend moderno, incluyendo:

- Manipulación del DOM.
- Programación modular en JavaScript.
- Arquitectura basada en componentes.
- Web Components.
- Persistencia de datos en el navegador.
- Diseño responsive.
- Gestión de estados mediante almacenamiento local.

---



## 👨‍💻 Autor

**Jaime Naranjo**

Proyecto académico desarrollado como práctica de desarrollo web frontend utilizando JavaScript moderno, Web Components y almacenamiento local.

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos y académicos.

Se permite su uso como referencia para aprendizaje y práctica de desarrollo web.