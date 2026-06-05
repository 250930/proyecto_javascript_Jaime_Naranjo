const orders = JSON.parse(localStorage.getItem("undergold_orders")) || [];

const totalOrdersElement = document.getElementById("totalOrders");
const totalSalesElement = document.getElementById("totalSales");
const productsSoldElement = document.getElementById("productsSold");
const averageTicketElement = document.getElementById("averageTicket");
const bestCustomerElement = document.getElementById("bestCustomer");

function loadStatistics() {
  const totalOrders = orders.length;

  let totalSales = 0;
  let productsSold = 0;

  const customerCounter = {};

  orders.forEach((order) => {
    totalSales += Number(order.total || 0);

    const customerName =
      order.cliente?.nombre || order.customerName || "Sin nombre";

    customerCounter[customerName] = (customerCounter[customerName] || 0) + 1;

    const items = order.productos || order.items || [];

    items.forEach((item) => {
      productsSold += Number(item.quantity || 0);
    });
  });

  const averageTicket = totalOrders > 0 ? totalSales / totalOrders : 0;

  let bestCustomer = "Sin datos";
  let maxOrders = 0;

  for (const customer in customerCounter) {
    if (customerCounter[customer] > maxOrders) {
      maxOrders = customerCounter[customer];
      bestCustomer = customer;
    }
  }

  totalOrdersElement.textContent = totalOrders;

  totalSalesElement.textContent = "$" + totalSales.toFixed(2);

  productsSoldElement.textContent = productsSold;

  averageTicketElement.textContent = "$" + averageTicket.toFixed(2);

  bestCustomerElement.textContent = bestCustomer;
}

loadStatistics();
